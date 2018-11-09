'use strict'

const split = require('../index')

// Test case for split(string, false, false)

describe('Split text with non-spaced Pinyin and return Pinyin only', () => {
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
		split('I am 本 and this is Pinyin: "wodemaoxihuanheniunai".').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo3', 'de', 'mao1', 'xi3', 'huan', 'he1', 'niu2', 'nai3']
		split('I am 本 and this is Pinyin: "wo3demao1xi3huanhe1niu2nai3".').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wǒ', 'de', 'māo', 'xǐ', 'huan', 'hē', 'niú', 'nǎi']
		split('I am 本 and this is Pinyin: "wǒdemāoxǐhuanhēniúnǎi".').should.deepEqual(list)
		done()
	})
})

describe('Split text with spaced Pinyin and return Pinyin only', () => {
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
		split('I am 本 and this is Pinyin: "wo de mao xihuan he niunai".').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo3', 'de', 'mao1', 'xi3', 'huan', 'he1', 'niu2', 'nai3']
		split('I am 本 and this is Pinyin: "wo3 de mao1 xi3huan he1 niu2nai3".').should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wǒ', 'de', 'māo', 'xǐ', 'huan', 'hē', 'niú', 'nǎi']
		split('I am 本 and this is Pinyin: "wǒ de māo xǐhuan hē niúnǎi".').should.deepEqual(list)
		done()
	})
})

// Test case for split(string, true, false)

describe('Split text with non-spaced Pinyin and return everything', () => {
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai', '".'
		]
		split('I am 本 and this is Pinyin: "wodemaoxihuanheniunai".', true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wo3', 'de', 'mao1', 'xi3', 'huan', 'he1', 'niu2', 'nai3', '".'
		]
		split('I am 本 and this is Pinyin: "wo3demao1xi3huanhe1niu2nai3".', true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wǒ', 'de', 'māo', 'xǐ', 'huan', 'hē', 'niú', 'nǎi', '".'
		]
		split('I am 本 and this is Pinyin: "wǒdemāoxǐhuanhēniúnǎi".', true).should.deepEqual(list)
		done()
	})
})

describe('Split text with spaced Pinyin and return everything', () => {
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wo', ' ', 'de', ' ', 'mao', ' ', 'xi', 'huan', ' ', 'he', ' ', 'niu', 'nai', '".'
		]
		split('I am 本 and this is Pinyin: "wo de mao xihuan he niunai".', true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wo3', ' ', 'de', ' ', 'mao1', ' ', 'xi3', 'huan', ' ', 'he1', ' ', 'niu2', 'nai3', '".'
		]
		split('I am 本 and this is Pinyin: "wo3 de mao1 xi3huan he1 niu2nai3".', true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wǒ', ' ', 'de', ' ', 'māo', ' ', 'xǐ', 'huan', ' ', 'hē', ' ', 'niú', 'nǎi', '".'
		]
		split('I am 本 and this is Pinyin: "wǒ de māo xǐhuan hē niúnǎi".', true).should.deepEqual(list)
		done()
	})
})

// Test case for split(string, true, true)

describe('Split text with non-spaced Pinyin and return everything with Pinyin wrapped in lists', () => {
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wo'], ['de'], ['mao'], ['xi'], ['huan'], ['he'], ['niu'], ['nai'], '".'
		]
		split('I am 本 and this is Pinyin: "wodemaoxihuanheniunai".', true, true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wo3'], ['de'], ['mao1'], ['xi3'], ['huan'], ['he1'], ['niu2'], ['nai3'], '".'
		]
		split('I am 本 and this is Pinyin: "wo3demao1xi3huanhe1niu2nai3".', true, true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wǒ'], ['de'], ['māo'], ['xǐ'], ['huan'], ['hē'], ['niú'], ['nǎi'], '".'
		]
		split('I am 本 and this is Pinyin: "wǒdemāoxǐhuanhēniúnǎi".', true, true).should.deepEqual(list)
		done()
	})
})

describe('Split text with spaced Pinyin and return everything with Pinyin wrapped in lists', () => {
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wo'], ' ', ['de'], ' ', ['mao'], ' ', ['xi'], ['huan'], ' ', ['he'], ' ', ['niu'], ['nai'], '".'
		]
		split('I am 本 and this is Pinyin: "wo de mao xihuan he niunai".', true, true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wo3'], ' ', ['de'], ' ', ['mao1'], ' ', ['xi3'], ['huan'], ' ', ['he1'], ' ', ['niu2'], ['nai3'], '".'
		]
		split('I am 本 and this is Pinyin: "wo3 de mao1 xi3huan he1 niu2nai3".', true, true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wǒ'], ' ', ['de'], ' ', ['māo'], ' ', ['xǐ'], ['huan'], ' ', ['hē'], ' ', ['niú'], ['nǎi'], '".'
		]
		split('I am 本 and this is Pinyin: "wǒ de māo xǐhuan hē niúnǎi".', true, true).should.deepEqual(list)
		done()
	})
})

// Extra test case

describe('Split spaced and punctuated text and keep spaces as well as punctuation', () => {
	it('should split the text into the correct words and punctuation', done => {
		const list = ['Wǒ', ' ', 'bú', ' ', 'huì', ' ', 'shuō', ' ', 'Yīng', 'wén', '.']
		split('Wǒ bú huì shuō Yīngwén.', true).should.deepEqual(list)
		done()
	})
	it('should split the text into the correct words and punctuation', done => {
		const list = ['Wo3', ' ', 'bu2', ' ', 'hui4', ' ', 'shuo1', ' ', 'Ying1', 'wen2', '.']
		split('Wo3 bu2 hui4 shuo1 Ying1wen2.', true).should.deepEqual(list)
		done()
	})
})
