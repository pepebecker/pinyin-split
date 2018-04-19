'use strict'

const wordsData = require('./words.json')

const allWords = Object.values(wordsData).reduce((o, i) => o.concat(i), [])

const normalizePinyin = (pinyin) => pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/(\w)[1-5]/g, '$1').toLowerCase()

const split = (text, everything=false, returnAsList=false) => {
  const list = []
  let wordEnd = text.length
  while (wordEnd > 0) {
    let count = wordEnd
    let wordFound = false
    while (count > 0) {
      const word = text.substring(wordEnd - count, wordEnd)
      if (allWords.includes(normalizePinyin(word))) {
        wordFound = true
        list.push(returnAsList ? [word] : word)
        wordEnd -= (count - 1)
        break
      }
      count--
    }
    if (!wordFound && everything) {
      if (wordEnd === text.length || typeof list[list.length - 1] === 'object' || !returnAsList) {
        list.push(text[wordEnd - 1])
      }
      else if (typeof list[list.length - 1] === 'string') {
        if (returnAsList) {
          list[list.length - 1] = text[wordEnd - 1] + list[list.length - 1]
        } else {
          list[list.length - 1] = list[list.length - 1]
          list.splice(list.length - 1, 0, text[wordEnd - 1])
        }
      }
    }
    wordEnd --
  }
  return list.reverse()
}

module.exports = split
