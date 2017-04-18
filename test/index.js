'use strict'

const split = require('../index')

split('wǒdemāoxǐhuānhēniúnǎi').then((data) => {
	console.log(data.join(' '))
}, console.error)

split('wo3demao1xi3huan1he1niu2nai3').then((data) => {
	console.log(data.join(' '))
}, console.error)

split('wodemaoxihuanheniunai').then((data) => {
	console.log(data.join(' '))
}, console.error)

split('wǒ de māo xǐhuān hē niúnǎi', true).then((data) => {
	console.log(data.join(''))
}, console.error)

split('wo3 de mao1 xi3huan1 he1 niu2nai3', true).then((data) => {
	console.log(data.join(''))
}, console.error)

split('wo de mao xihuan he niunai', true).then((data) => {
	console.log(data.join(''))
}, console.error)