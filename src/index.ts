import syllables from './syllables'

const normalize = (text: string) => {
  text = text.normalize('NFD').replace(/\u0304|\u0301|\u030c|\u0300/g, '')
  return text.normalize('NFC').replace(/(\w|ü)[1-5]/gi, '$1').toLowerCase()
}

/**
 *
 * @param text (non-spaced) text to split into Pinyin syllables
 */
function split(text: string): string[]
/**
 *
 * @param text (non-spaced) text to split into Pinyin syllables
 * @param everything include non-Pinyin text in result
 */
function split(text: string, everything: boolean): string[]
/**
 *
 * @param text (non-spaced) text to split into Pinyin syllables
 * @param everything include non-Pinyin text in result
 * @param wrapInList distinguish Pinyin syllables from non-Pinyin text
 * by wrapping them into a 1 value array
 */
function split(text: string, everything: boolean, wrapInList: boolean): string[]
function split(text: string, everything: boolean, wrapInList: true): (string[]|string)[]
function split(text: string, everything=false, wrapInList=false) {
  const list = Array<string | string[]>()
  let prevWordFound = false
  let wordEnd = text.length
  while (wordEnd > 0) {
    let count = wordEnd
    let wordFound = false
    while (count > 0) {
      const word = text.substring(wordEnd - count, wordEnd)
      if (syllables.includes(normalize(word))) {
        wordFound = true
        list.push(wrapInList ? [word] : word)
        wordEnd -= (count - 1)
        break
      }
      count--
    }
    if (!wordFound && everything) {
      const prevIndex = list.length - 1
      const prevEntry = list[prevIndex]
      if (wordEnd === text.length || typeof prevEntry === 'object' || prevWordFound) {
        list.push(text[wordEnd - 1])
      }
      else if (typeof prevEntry === 'string') {
        list[prevIndex] = text[wordEnd - 1] + prevEntry
      }
    }
    wordEnd --
    prevWordFound = wordFound
  }
  return list.reverse()
}

export default split
