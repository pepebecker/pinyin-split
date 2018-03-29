'use strict'

const utils = require('pinyin-utils')
const wordsData = require('./words.json')

let allWords = Object.values(wordsData).reduce((o, i) => o.concat(i), [])

const wordsCount = allWords.length
for (let i = 0; i < wordsCount; i++) {
  for (let n = 1; n <= 5; n++) {
    allWords.push(utils.numberToMark(allWords[i] + n))
    allWords.push(allWords[i] + n)
  }
}

const split = (text, everything) => {
  const list = []
  let wordEnd = text.length
  while (wordEnd > 0) {
    let count = wordEnd
    let wordFound = false
    while (count > 1) {
      const word = text.substring(wordEnd - count, wordEnd)
      if (allWords.includes(word.toLowerCase())) {
        wordFound = true
        list.push(everything ? [word] : word)
        wordEnd -= (count - 1)
        break
      }
      count--
    }
    if (!wordFound && everything) {
      if (wordEnd === text.length || typeof list[list.length - 1] === 'object') {
        list.push(text[wordEnd - 1])
      }
      else if (typeof list[list.length - 1] === 'string') {
        list[list.length - 1] = text[wordEnd - 1] + list[list.length - 1]
      }
    }
    wordEnd --
  }
  return list.reverse()
}

module.exports = split
