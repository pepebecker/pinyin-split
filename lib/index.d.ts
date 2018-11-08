/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @example split('本: "wǒshìzhōngguórén".')
 * ['wǒ', 'shì', 'zhōng', 'guó', 'rén']
 */
declare function split(str: string): string[];
/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Flag to specify if everything or only Pinyin should be returned.
 * @example split('本: "wǒshìzhōngguórén".', false)
 * ['wǒ', 'shì', 'zhōng', 'guó', 'rén']
 */
declare function split(str: string, everything: false): string[];
/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Flag to specify if everything or only Pinyin should be returned.
 * @example split('本: "wǒshìzhōngguórén".', true)
 * ['本: "', 'wǒ', 'shì', 'zhōng', 'guó', 'rén', '"."]
 */
declare function split(str: string, everything: true): string[];
/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into list to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', false, false)
 * ['wǒ', 'shì', 'zhōng', 'guó', 'rén']
 */
declare function split(str: string, everything: false, wrapInList: false): string[];
/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into lists to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', false, true)
 * [['wǒ'], ['shì'], ['zhōng'], ['guó'], ['rén']]
 */
declare function split(str: string, everything: false, wrapInList: true): string[][];
/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into list to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', true, false)
 * ['本: "', 'wǒ', 'shì', 'zhōng', 'guó', 'rén', '"."]
 */
declare function split(str: string, everything: true, wrapInList: false): string[];
/**
 * Split Pinyin and return array of Pinyin syllables
 * @param str String to split into Pinyin syllables.
 * @param everything Return everything or only Pinyin.
 * @param wrapInList Wrap Pinyin into list to differentiate from non Pinyin text
 * @example split('本: "wǒshìzhōngguórén".', true, true)
 * ['本: "', ['wǒ'], ['shì'], ['zhōng'], ['guó'], ['rén'], '"."]
 */
declare function split(str: string, everything: true, wrapInList: true): (string | string[])[];
export = split;
