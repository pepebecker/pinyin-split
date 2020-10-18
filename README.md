# Pinyin Split

[![npm version](https://img.shields.io/npm/v/pinyin-split.svg)](https://www.npmjs.com/package/pinyin-split)
[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-split.svg)](https://travis-ci.org/pepebecker/pinyin-split)
[![dependency status](https://img.shields.io/david/pepebecker/pinyin-split.svg)](https://david-dm.org/pepebecker/pinyin-split)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/pinyin-split.svg)](https://david-dm.org/pepebecker/pinyin-split#info=devDependencies)
[![ISC-licensed](https://img.shields.io/github/license/pepebecker/pinyin-split.svg)](https://choosealicense.com/licenses/isc/)

## Install

```shell
npm install pinyin-split
```

## Usage

```js
import split from 'pinyin-split'

console.log(split('本：wodemaoxihuanheniunai！'))
// ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']

console.log(split('本：wo de mao xihuan he niunai！'))
// ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']

// return everything and wrap pinyin into lists
console.log(split('本：ni jiao shenme mingzi？', true, true))
// ['本：'['ni'], ' ', ['jiao'], ' ', ['shen'], ['me'], ' ', ['ming'], ['zi'], '？']

// return everything and don't wrap pinyin into lists
console.log(split('Nǐ huì shuō Yīngwén ma?', true))
// ['Nǐ', ' ', 'huì', ' ', 'shuō', ' ', 'Yīng', 'wén', ' ', 'ma', '?']
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`cedict`](https://github.com/pepebecker/cedict)
- [`mdbg`](https://github.com/pepebecker/mdbg)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`hanzi-to-pinyin`](https://github.com/pepebecker/hanzi-to-pinyin)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-api`](https://github.com/pepebecker/pinyin-api)
- [`pinyin-bot-core`](https://github.com/pepebecker/pinyin-bot-core)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)
- [`pinyin-line`](https://github.com/pepebecker/pinyin-line)
- [`pinyin-chrome`](https://github.com/pepebecker/pinyin-chrome)
- [`pinyin-cli`](https://github.com/pepebecker/pinyin-cli)
- [`hanzi-cli`](https://github.com/pepebecker/hanzi-cli)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-split/issues).
