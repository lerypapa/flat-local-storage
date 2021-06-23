# [simple-local-storage](https://github.com/lerypapa/simple-local-storage)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lerypapa/simple-local-storage/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/lerypapa/simple-local-storage.svg?branch=master)](https://travis-ci.org/lerypapa/simple-local-storage)
[![Coveralls](https://img.shields.io/coveralls/lerypapa/simple-local-storage.svg)](https://coveralls.io/github/lerypapa/simple-local-storage)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/simple-local-storage)
[![NPM downloads](http://img.shields.io/npm/dm/simple-local-storage.svg?style=flat-square)](http://www.npmtrends.com/simple-local-storage)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/lerypapa/simple-local-storage.svg)](http://isitmaintained.com/project/lerypapa/simple-local-storage "Percentage of issues still open")

The best third party `JS|TS` library scaffold. 

## Characteristics

- Coded in ES6+ or TypeScript, easily compile and generate production code
- Supports multi environment, including default browsers, Node, AMD, CMD, Webpack, Rollup, Fis and so on.
- Integrated [jsmini](https://github.com/jsmini)

**Note:** When `export` and `export default` are not used at the same time, there is the option to 
turn on `legacy mode`. Under `legacy mode`, the module system can be compatible with `IE6-8`. For more information on legacy mode, 
please see rollup supplemental file. 

## Compatibility
Unit tests guarantee support on the following environment:

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

> Note: Compiling code depend on ES5, so you need import [es5-shim](http://github.com/es-shims/es5-shim/) to compatible with `IE6-8`, here is a [demo](./demo/demo-global.html)

## Directory
```
├── demo - Using demo
├── dist - Compiler output code
├── doc - Project documents
├── src - Source code directory
├── test - Unit tests
├── CHANGELOG.md - Change log
└── TODO.md - Planned features
```

## Install

Using npm, download and install the code. 

```bash
$ npm install --save simple-local-storage
```

For node environment：

```js
var storage = require('simple-local-storage');
```

For webpack or similar environment：

```js
import storage from 'simple-local-storage';
```

For requirejs environment:

```js
requirejs(['node_modules/simple-local-storage/dist/index.aio.js'], function (storage) {
    // do something...
})
```

For browser environment:

```html
<script src="node_modules/simple-local-storage/dist/index.aio.js"></script>
```

## Basic Usage
### Initialization
storage.init({
  name: 'NAME',
  version: '1.0.0'
})
### Set and Get Item
#### Set and get a value of type string
```js
storage.setItem('subkey', 'the string')
```
```js
storage.getItem('subkey')
// expect to return 'the string'
```

#### Set and get a value of type json object 
```js
storage.setItem('subkey', {
  a: {
    b: {
      c: 123,
      d: '789',
    }
  }
})
```
```js
storage.getItem('subkey')
/**
 expect to return {
  a: {
    b: {
      c: 123,
      d: '789',
    }
  }
}
*/
```

#### Set and get a value of type json array
```js
storage.setItem('subkey', [{
  a: 1,
  b: {
    c: '2',
    d: [{
      g: 'c'
    }]
  }
}])
```
```js
storage.getItem('subkey')
/**
 expect to return {
  a: 1,
  b: {
    c: '2',
    d: [{
      g: 'c'
    }]
  }
}
*/
```
#### Set and get a value of type number
```js
storage.setItem('subkey', 1)
```
```js
storage.getItem('subkey')
/**
 expect to return 1
*/
```

#### Set and get a value of type null
```js
storage.setItem('subkey', null)
```
```js
storage.getItem('subkey')
/**
 expect to return null
*/
```

#### Set and get a value of type undefined
```js
storage.setItem('subkey', undefined)
```
```js
storage.getItem('subkey')
/**
 expect to return undefined
*/
```

## Contribution Guide
For the first time to run, you need to install dependencies firstly.

```bash
$ npm install
```

To build the project:

```bash
$ npm run build
```

To run unit tests:

```bash
$ npm test
```

> Note: The browser environment needs to be tested manually under ```test/browser```

Modify the version number in package.json, modify the version number in README.md, modify the CHANGELOG.md, and then release the new version.

```bash
$ npm run release
```

Publish the new version to NPM.

```bash
$ npm publish
```

## Contributors

[contributors](https://github.com/lerypapa/simple-local-storage/graphs/contributors)

## Change Log
[CHANGELOG.md](./CHANGELOG.md)

## TODO
[TODO.md](./TODO.md)