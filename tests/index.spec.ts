import 'mocha'
import { expect } from 'chai'

import split from '../src/index'

// Test case for split(string, false, false)

describe('Split text with non-spaced Pinyin and return Pinyin only', () => {
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
		expect(split('I am 本 and this is Pinyin: "wodemaoxihuanheniunai".')).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo3', 'de', 'mao1', 'xi3', 'huan', 'he1', 'niu2', 'nai3']
		expect(split('I am 本 and this is Pinyin: "wo3demao1xi3huanhe1niu2nai3".')).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wǒ', 'de', 'māo', 'xǐ', 'huan', 'hē', 'niú', 'nǎi']
		expect(split('I am 本 and this is Pinyin: "wǒdemāoxǐhuanhēniúnǎi".')).deep.equal(list)
		done()
	})
})

describe('Split text with spaced Pinyin and return Pinyin only', () => {
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
		expect(split('I am 本 and this is Pinyin: "wo de mao xihuan he niunai".')).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wo3', 'de', 'mao1', 'xi3', 'huan', 'he1', 'niu2', 'nai3']
		expect(split('I am 本 and this is Pinyin: "wo3 de mao1 xi3huan he1 niu2nai3".')).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = ['a', 'm', 'an', 'Pin', 'yin', 'wǒ', 'de', 'māo', 'xǐ', 'huan', 'hē', 'niú', 'nǎi']
		expect(split('I am 本 and this is Pinyin: "wǒ de māo xǐhuan hē niúnǎi".')).deep.equal(list)
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
		expect(split('I am 本 and this is Pinyin: "wodemaoxihuanheniunai".', true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wo3', 'de', 'mao1', 'xi3', 'huan', 'he1', 'niu2', 'nai3', '".'
		]
		expect(split('I am 本 and this is Pinyin: "wo3demao1xi3huanhe1niu2nai3".', true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wǒ', 'de', 'māo', 'xǐ', 'huan', 'hē', 'niú', 'nǎi', '".'
		]
		expect(split('I am 本 and this is Pinyin: "wǒdemāoxǐhuanhēniúnǎi".', true)).deep.equal(list)
		done()
	})
})

describe('Split text with spaced Pinyin and return everything', () => {
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wo', ' ', 'de', ' ', 'mao', ' ', 'xi', 'huan', ' ', 'he', ' ', 'niu', 'nai', '".'
		]
		expect(split('I am 本 and this is Pinyin: "wo de mao xihuan he niunai".', true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wo3', ' ', 'de', ' ', 'mao1', ' ', 'xi3', 'huan', ' ', 'he1', ' ', 'niu2', 'nai3', '".'
		]
		expect(split('I am 本 and this is Pinyin: "wo3 de mao1 xi3huan he1 niu2nai3".', true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', 'a', 'm', ' 本 ', 'an', 'd this is ', 'Pin', 'yin', ': "',
			'wǒ', ' ', 'de', ' ', 'māo', ' ', 'xǐ', 'huan', ' ', 'hē', ' ', 'niú', 'nǎi', '".'
		]
		expect(split('I am 本 and this is Pinyin: "wǒ de māo xǐhuan hē niúnǎi".', true)).deep.equal(list)
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
		expect(split('I am 本 and this is Pinyin: "wodemaoxihuanheniunai".', true, true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wo3'], ['de'], ['mao1'], ['xi3'], ['huan'], ['he1'], ['niu2'], ['nai3'], '".'
		]
		expect(split('I am 本 and this is Pinyin: "wo3demao1xi3huanhe1niu2nai3".', true, true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wǒ'], ['de'], ['māo'], ['xǐ'], ['huan'], ['hē'], ['niú'], ['nǎi'], '".'
		]
		expect(split('I am 本 and this is Pinyin: "wǒdemāoxǐhuanhēniúnǎi".', true, true)).deep.equal(list)
		done()
	})
})

describe('Split text with spaced Pinyin and return everything with Pinyin wrapped in lists', () => {
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wo'], ' ', ['de'], ' ', ['mao'], ' ', ['xi'], ['huan'], ' ', ['he'], ' ', ['niu'], ['nai'], '".'
		]
		expect(split('I am 本 and this is Pinyin: "wo de mao xihuan he niunai".', true, true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wo3'], ' ', ['de'], ' ', ['mao1'], ' ', ['xi3'], ['huan'], ' ', ['he1'], ' ', ['niu2'], ['nai3'], '".'
		]
		expect(split('I am 本 and this is Pinyin: "wo3 de mao1 xi3huan he1 niu2nai3".', true, true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words', done => {
		const list = [
			'I ', ['a'], ['m'], ' 本 ', ['an'], 'd this is ', ['Pin'], ['yin'], ': "',
			['wǒ'], ' ', ['de'], ' ', ['māo'], ' ', ['xǐ'], ['huan'], ' ', ['hē'], ' ', ['niú'], ['nǎi'], '".'
		]
		expect(split('I am 本 and this is Pinyin: "wǒ de māo xǐhuan hē niúnǎi".', true, true)).deep.equal(list)
		done()
	})
})

// Extra test case

describe('Split spaced and punctuated text and keep spaces as well as punctuation', () => {
	it('should split the text into the correct words and punctuation', done => {
		const list = ['Wǒ', ' ', 'bú', ' ', 'huì', ' ', 'shuō', ' ', 'Yīng', 'wén', '.']
		expect(split('Wǒ bú huì shuō Yīngwén.', true)).deep.equal(list)
		done()
	})
	it('should split the text into the correct words and punctuation', done => {
		const list = ['Wo3', ' ', 'bu2', ' ', 'hui4', ' ', 'shuo1', ' ', 'Ying1', 'wen2', '.']
		expect(split('Wo3 bu2 hui4 shuo1 Ying1wen2.', true)).deep.equal(list)
		done()
	})
})
