'use strict'

import syllables from './syllables'

const normalizePinyin = (pinyin: string): string => pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC').replace(/(\w)[1-5]/g, '$1').toLowerCase()

/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @example split('本: "wǒshìzhōngguórén".')
 * ['wǒ', 'shì', 'zhōng', 'guó', 'rén']
 */
function split(str: string): string[]

/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Flag to specify if everything or only Pinyin should be returned.
 * @example split('本: "wǒshìzhōngguórén".', false)
 * ['wǒ', 'shì', 'zhōng', 'guó', 'rén']
 */
function split(str: string, everything?: false): string[]

/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Flag to specify if everything or only Pinyin should be returned.
 * @example split('本: "wǒshìzhōngguórén".', true)
 * ['本: "', 'wǒ', 'shì', 'zhōng', 'guó', 'rén', '"."]
 */
function split(str: string, everything?: true): string[]

/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into list to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', false, false)
 * ['wǒ', 'shì', 'zhōng', 'guó', 'rén']
 */
function split(str: string, everything?: false, wrapInList?: false): string[]

/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into lists to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', false, true)
 * [['wǒ'], ['shì'], ['zhōng'], ['guó'], ['rén']]
 */
function split(str: string, everything?: false, wrapInList?: true): string[][]

/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into list to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', true, false)
 * ['本: "', 'wǒ', 'shì', 'zhōng', 'guó', 'rén', '"."]
 */
function split(str: string, everything?: true, wrapInList?: false): string[]

/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into list to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', true, true)
 * ['本: "', ['wǒ'], ['shì'], ['zhōng'], ['guó'], ['rén'], '"."]
 */
function split(str: string, everything?: true, wrapInList?: true): (string | string[])[]

function split(str: string, everything?: boolean, wrapInList?: boolean) {
  const list = []
  let prevWordFound = false
  let wordEnd = str.length
  while (wordEnd > 0) {
    let count = wordEnd
    let wordFound = false
    while (count > 0) {
      const word = str.substring(wordEnd - count, wordEnd)
      if (syllables.includes(normalizePinyin(word))) {
        wordFound = true
        list.push(wrapInList ? [word] : word)
        wordEnd -= (count - 1)
        break
      }
      count--
    }
    if (!wordFound && everything) {
      const prevIndex: number = list.length - 1
      const prevEntry: string | string[] = list[prevIndex]
      if (wordEnd === str.length || typeof prevEntry === 'object' || prevWordFound) {
        list.push(str[wordEnd - 1])
      }
      else if (typeof prevEntry === 'string') {
        list[prevIndex] = str[wordEnd - 1] + prevEntry
      }
    }
    wordEnd --
    prevWordFound = wordFound
  }
  return list.reverse()
}

export = split
