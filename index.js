'use strict'

const wordsData = require('./words.json')
const utils = require('pinyin-utils')

let allWords = []

for (let wordList in wordsData) {
	allWords = allWords.concat(wordsData[wordList])
}

// Add all four tones
for (var i = 1; i <= 4; i++) {
	allWords = allWords.concat(allWords.map((word) => utils.numberToMark(word + i)))
}

// Add capitalized words
allWords = allWords.concat(allWords.map((word) => utils.capitalize(word)))

// Sort them by having the longest ones on the top
allWords = allWords.sort((a, b) => b.length - a.length)

let doNotMatch = []
let recursionCount = 0

const inDoNotMatch = (index, word) => {
  for (let item of doNotMatch) {
    if (item.index === index && item.word === word) {
      return true
    }
  }
  return false
}

const reAllowed = /^[a-züāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]+$/i

const matchWords = (text, keepSpaces, rc, debug) => {
  if (debug) {
		console.log(`DEBUG> Recursion count: '${recursionCount}'`)
		console.log(`DEBUG> do not match: '${doNotMatch.map((item) => item.index + ':' + item.word).join()}'`)
	}

  let words = []
  let i = 0

  while (i < text.length) {
    let wordFound = false

    if (!reAllowed.test(text[i])) {
			if (keepSpaces) words.push({index: i, word: text[i]})
      i ++
      wordFound = true
    }

    for (let word of allWords) {
      if (inDoNotMatch(i, word)) {
        if (debug) console.log('DEBUG> Skipped:', word)
        continue
      }

      if (text.substr(i, word.length) === word) {
        if (debug) console.log('DEBUG> Found word:', word)

        const item = {index: i, word: word}
        i += word.length

        if (i < text.length) {
          const tone = text[i]
          if (/[1-4]/.test(tone)) {
            if (debug) console.log('DEBUG> Found tone:', tone)
            item.tone = tone
            i ++
          }
        }

        words.push(item)
        wordFound = true
        break
      }
    }

    if (!wordFound) {
      const lastItem = words[words.length - 1]
      if (lastItem) {
        doNotMatch.push(lastItem)
        if (debug) console.log('DEBUG> Adding word to doNotMatch list:', lastItem.word)
        if (rc > 0) {
          recursionCount ++
          return matchWords(text, --rc, debug)
        }
        if (debug) console.log(`DEBUG> Max recursion count exceeded`)
        return null
      } else {
        if (debug) console.log('DEBUG> Error on line 94!')
        return null
      }
    }
  }

  if (debug) console.log(`DEBUG> Text was sucessfully splitted`)
  return words
}

const split = (text, options = {}) => new Promise((yay, nay) => {
  doNotMatch = []

	const keepSpaces = options.keepSpaces || false
	const maxRecursion = options.maxRecursion || 5
	const debug = options.debug || false

  let words = matchWords(text, keepSpaces, maxRecursion, debug)

  if (words) {
    words = words.map((item) => item.word + (item.tone?item.tone:''))
    yay(words)
  } else {
    nay('Failed to split words')
  }
})

module.exports = split
