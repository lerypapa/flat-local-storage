# [simple-local-stoage](https://github.com/lerypapa/simple-local-stoage)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lerypapa/simple-local-stoage/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/lerypapa/simple-local-stoage.svg?branch=master)](https://travis-ci.org/lerypapa/simple-local-stoage)
[![Coveralls](https://img.shields.io/coveralls/lerypapa/simple-local-stoage.svg)](https://coveralls.io/github/lerypapa/simple-local-stoage)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/simple-local-stoage)
[![NPM downloads](http://img.shields.io/npm/dm/simple-local-stoage.svg?style=flat-square)](http://www.npmtrends.com/simple-local-stoage)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/lerypapa/simple-local-stoage.svg)](http://isitmaintained.com/project/lerypapa/simple-local-stoage "Percentage of issues still open")

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

## Usage Instructions

Using npm, download and install the code. 

```bash
$ npm install --save simple-local-stoage
```

For node environment：

```js
var base = require('simple-local-stoage');
```

For webpack or similar environment：

```js
import base from 'simple-local-stoage';
```

For requirejs environment:

```js
requirejs(['node_modules/simple-local-stoage/dist/index.aio.js'], function (base) {
    // do something...
})
```

For browser environment:

```html
<script src="node_modules/simple-local-stoage/dist/index.aio.js"></script>
```

## Documents
[API](./doc/api.md)

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

[contributors](https://github.com/lerypapa/simple-local-stoage/graphs/contributors)

## Change Log
[CHANGELOG.md](./CHANGELOG.md)

## TODO
[TODO.md](./TODO.md)