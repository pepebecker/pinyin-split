'use strict'

const split = require('../index')

describe('Split text and keep non-pinyin text', () => {
	it('should split the text into the correct words', done => {
		const list = ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
		split('wodemaoxihuanheniunai').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['wo3', 'de', 'mao1', 'xi3', 'huan1', 'he2', 'niu3', 'nai3']
		split('wo3demao1xi3huan1he2niu3nai3').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['wǒ', 'de', 'māo', 'xǐ', 'huān', 'hé', 'niǔ', 'nǎi']
		split('wǒdemāoxǐhuānhéniǔnǎi').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['de', 're', 'wo', 'fen', 'dou', 'dou', 'wo', 'ren', 'wei']
		split('derewofendoudouworenwei').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['de2', 're3', 'wo3', 'fen4', 'dou4', 'dou3', 'wo3', 'ren4', 'wei4']
		split('de2re3wo3fen4dou4dou3wo3ren4wei4').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['dé', 'rě', 'wǒ', 'fèn', 'dòu', 'dǒu', 'wǒ', 'rèn', 'wèi']
		split('dérěwǒfèndòudǒuwǒrènwèi').should.deepEqual(list)
		done()
	})
})

describe('Split text and return Pinyin only', () => {
	it('should split the text into the correct words', done => {
		const list = ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
		split('wo de mao xihuan he niunai').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['wo3', 'de', 'mao1', 'xi3', 'huan1', 'he2', 'niu3', 'nai3']
		split('wo3 de mao1 xi3huan1 he2 niu3nai3').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['wǒ', 'de', 'māo', 'xǐ', 'huān', 'hé', 'niǔ', 'nǎi']
		split('wǒ de māo xǐhuān hé niǔnǎi').should.deepEqual(list)
		done()
	})
})

describe('Split spaced text and keep spaces', () => {
	it('should split the text into the correct words', done => {
		const list = [['wo'], ' ', ['de'], ' ', ['mao'], ' ', ['xi'], ['huan'], ' ', ['he'], ' ', ['niu'], ['nai']]
		split('wo de mao xihuan he niunai', true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [['wo3'], ' ', ['de'], ' ', ['mao1'], ' ', ['xi3'], ['huan'], ' ', ['he2'], ' ', ['niu3'], ['nai3']]
		split('wo3 de mao1 xi3huan he2 niu3nai3', true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [['wǒ'], ' ', ['de'], ' ', ['māo'], ' ', ['xǐ'], ['huan'], ' ', ['hé'], ' ', ['niǔ'], ['nǎi']]
		split('wǒ de māo xǐhuan hé niǔnǎi', true).should.deepEqual(list)
		done()
	})
})
