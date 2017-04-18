'use strict'

const finalsData = require('./finals.json')
const utils = require('pinyin-utils')

const pad = (n, width, z) => {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

let finals = []

for (let f in finalsData) {
	finals = finals.concat(finalsData[f])
}

// Add all four tones
for (var i = 1; i <= 4; i++) {
	finals = finals.concat(finals.map((word) => utils.numberToMark(word + i)))
}

// Add capitalize words
finals = finals.concat(finals.map((word) => capitalize(word)))

// Sort them by having the longest ones on the top
finals = finals.sort((a, b) => b.length - a.length)

const split = (text, keepSpaces = false) => new Promise((yay, nay) => {
	let matchedFinals = []
	let index = 0
	for (let f of finals) {
		let matches = text.match(new RegExp(f + '[1-4]*', 'g'))
		if (matches) {
			for (let match of matches) {
				const id = '$@' + pad(index, 10)
				matchedFinals.push({value: match, id: id})
				text = text.replace(match, id)
				index ++
			}
		}
	}

	for (let final of matchedFinals) {
		text = text.replace(final.id, final.value + ',')
	}

	let words = text.replace(/ /g, '').split(',')
	words.splice(-1,1)

	if (keepSpaces) {
		words = text.replace(/ /g, ' ,').split(',')
		words.splice(-1,1)
	}

	yay(words)
})

module.exports = split
