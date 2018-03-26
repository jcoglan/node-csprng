# csprng

[![NPM](https://nodei.co/npm/csprng.png)](https://nodei.co/npm/csprng/)

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/jcoglan/node-csprng/blob/master/LICENSE.md) 
[![npm](https://img.shields.io/npm/dw/localeval.svg?style=for-the-badge)](https://www.npmjs.com/package/csprng)

Generates secure random numbers using `crypto.randomBytes()`. Numbers can be of
any magnitude and in any base from 2 to 64.


## Installation

using npm
```bash
$ npm install csprng
```

using yarn
```bash
$ yarn add csprng
```

## Usage

Call the function passing the number of required bits, and the radix of the
output.

```js
const rand = require('csprng');

rand(160, 36) // -> 'tq2pdxrblkbgp8vt8kbdpmzdh1w8bex'
```

## Contribution

1. Fork the repository
2. Clone repository locally
3. Install all dependencies

```npm install
-OR-
yarn install
```
4. Make changes
5. Make sure eslint checks out
```
npm run lint
-OR-
yarn lint
```
6. Make sure tests succeed
```
npm run test
-OR-
yarn test
```
7. Commit changes
8. Create Pull Request

## License

(The MIT License)

Copyright (c) 2013-2017 James Coglan

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
