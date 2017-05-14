# Pinyin Split

[![Travis Build Status](https://travis-ci.org/pepebecker/pinyin-split.svg)](https://travis-ci.org/pepebecker/pinyin-split)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/pinyin-split/badge.svg)](https://coveralls.io/github/pepebecker/pinyin-split)
[![dependency status](https://img.shields.io/david/pepebecker/pinyin-split.svg)](https://david-dm.org/pepebecker/pinyin-split)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/pinyin-split.svg)](https://david-dm.org/pepebecker/pinyin-split#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/pinyin-split.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install pinyin-split@pepebecker/pinyin-split
```

## Usage

```js
const split = require('pinyin-split')

split('wodemaoxihuanheniunai')
.then(console.log) // ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
.catch(console.error)

split('wo de mao xihuan he niunai')
.then(console.log) // ['wo', 'de', 'mao', 'xi', 'huan', 'he', 'niu', 'nai']
.catch(console.error)

split('ni jiao shenme mingzi', {keepSpaces: true})
.then(console.log) // ['ni', ' ', 'jiao', ' ', 'shen', 'me', ' ', 'ming', 'zi']
.catch(console.error)
```

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/pinyin-split/issues).