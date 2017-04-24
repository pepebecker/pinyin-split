'use strict'

const wordsData = require('./words.json')
const utils = require('pinyin-utils')

let words = []

for (let wordList in wordsData) {
	words = words.concat(wordsData[wordList])
}

// Add all four tones
for (var i = 1; i <= 4; i++) {
	words = words.concat(words.map((word) => utils.numberToMark(word + i)))
}

// Add capitalize words
words = words.concat(words.map((word) => utils.capitalize(word)))

// Sort them by having the longest ones on the top
words = words.sort((a, b) => b.length - a.length)

let doNotMatch = []

let recursionCount = 0

const trySplit = (text, keepSpaces, r, debug) => {
	if (debug ) {
		console.log(`DEBUG> Recursion count: '${recursionCount}'`)
		console.log(`DEBUG> do not match: '${doNotMatch}'`)
	}
	let matchedWords = []
	let index = 0
	for (let word of words) {
		const re = new RegExp(word + '[1-4]*', 'g')
		let match = undefined
		while (match = re.exec(text)) {
			if (utils.contains(doNotMatch, match)) {
				continue
			}
			const id = '$@' + utils.pad(index, 10)
			matchedWords.push({value: match, id: id})
			text = text.replace(match, id)
			index ++
		}
	}

	for (let word of matchedWords) {
		text = text.replace(word.id, word.value + ',')
	}

	let result = text.replace(/ /g, '').split(',')
	result.splice(-1, 1)

	if (keepSpaces) {
		result = text.replace(/ /g, ' ,').split(',')
		result.splice(-1, 1)
	}

	if (r > 0) {
		for (let i in result) {
			if (result[i] !== ' ' && !utils.contains(words, result[i])) {
				if (debug) {
					recursionCount ++
					console.log(`DEBUG> '${result[i]}' is not a known Chinese word!`)
				}
				doNotMatch.push(result[i-1])
				return trySplit(result.join(''), keepSpaces, r - 1, debug)
			}
		}
		if (debug) console.log(`DEBUG> Text was sucessfully splitted`)
	} else {
		if (debug) console.log(`DEBUG> Max recursion count exceeded`)
	}

	return result
}

const split = (text, options = {}) => new Promise((yay, nay) => {
	const keepSpaces = options.keepSpaces || false
	const maxRecursion = options.maxRecursion || 5
	const debug = options.debug || false

	recursionCount = 0
	
	let matchedWords = trySplit(text, keepSpaces, maxRecursion, debug)

	yay(matchedWords)
})

module.exports = split
