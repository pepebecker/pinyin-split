'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const syllables_1 = __importDefault(require("./syllables"));
const normalizePinyin = (pinyin) => pinyin.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/(\w)[1-5]/g, '$1').toLowerCase();
function split(str, everything, wrapInList) {
    const list = [];
    let prevWordFound = false;
    let wordEnd = str.length;
    while (wordEnd > 0) {
        let count = wordEnd;
        let wordFound = false;
        while (count > 0) {
            const word = str.substring(wordEnd - count, wordEnd);
            if (syllables_1.default.includes(normalizePinyin(word))) {
                wordFound = true;
                list.push(wrapInList ? [word] : word);
                wordEnd -= (count - 1);
                break;
            }
            count--;
        }
        if (!wordFound && everything) {
            const prevIndex = list.length - 1;
            const prevEntry = list[prevIndex];
            if (wordEnd === str.length || typeof prevEntry === 'object' || prevWordFound) {
                list.push(str[wordEnd - 1]);
            }
            else if (typeof prevEntry === 'string') {
                list[prevIndex] = str[wordEnd - 1] + prevEntry;
            }
        }
        wordEnd--;
        prevWordFound = wordFound;
    }
    return list.reverse();
}
module.exports = split;
