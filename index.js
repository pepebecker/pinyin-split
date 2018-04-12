'use strict'

const wordsData = require('./words.json')

const allWords = Object.values(wordsData).reduce((o, i) => o.concat(i), [])

const normalizePinyin = (pinyin) => pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/(\w)[1-5]/g, '$1').toLowerCase()

const split = (text, everything=false, list=false) => {
    const words = []
    let previousString = ''
    let currentString = ''
    for (const [i,char] of text.split('').reverse().entries()) {
        currentString = char + currentString
        const previousStringNormalized = normalizePinyin(previousString)
        const currentStringNormalized = normalizePinyin(currentString)
        const isLastIteration = i+1===text.length
        const isFirstAndNotLastIteration = text.length>1 && i===0
        const currentContainsOnlySpecialChars = /^[^\w]+$/.test(currentStringNormalized)
        const previousContainsOnlySpecialChars = /^[^\w]+$/.test(previousStringNormalized)
        const currentIsValidWord = allWords.includes(currentStringNormalized)
        const previousIsValidWord = allWords.includes(previousStringNormalized)
        const currentMatchCount = allWords.filter(word=>word.includes(currentStringNormalized)).length
        const previousMatchCount = allWords.filter(word=>word.includes(previousStringNormalized)).length
        if (!isFirstAndNotLastIteration && ((previousMatchCount >= 1 && currentMatchCount === 0) || isLastIteration || (previousContainsOnlySpecialChars && !currentContainsOnlySpecialChars))) {
            if (everything || currentIsValidWord || previousIsValidWord) {
                if (currentIsValidWord || currentContainsOnlySpecialChars) {
                    words.push(list && currentIsValidWord ? [currentString] : currentString)
                } else {
                    words.push(list && previousIsValidWord ? [previousString] : previousString)
                    if (isFirstAndNotLastIteration)
                        words.push(char)
                }
            }
            currentString = char
        }
        previousString = currentString
    }
    return words.reverse()
}

module.exports = split
