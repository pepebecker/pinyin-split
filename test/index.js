'use strict'

const split = require('../index')

split('wǒdemāoxǐhuānhēniúnǎi').then((data) => {
	console.log('Test 1:', data.join(' '))
}, console.error)

split('wo3demao1xi3huan1he1niu2nai3').then((data) => {
	console.log('Test 2:', data.join(' '))
}, console.error)

split('wodemaoxihuanheniunai').then((data) => {
	console.log('Test 3:', data.join(' '))
}, console.error)

split('wǒ de māo xǐhuān hē niúnǎi', {keepSpaces: true}).then((data) => {
	console.log('Test 4:', data.join(''))
}, console.error)

split('wo3 de mao1 xi3huan1 he1 niu2nai3', {keepSpaces: true}).then((data) => {
	console.log('Test 5:', data.join(''))
}, console.error)

split('wo de mao xihuan he niunai', {keepSpaces: true}).then((data) => {
	console.log('Test 6:', data.join(''))
}, console.error)
