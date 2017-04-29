# jstransformer-buble

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-buble.svg)](https://greenkeeper.io/)

[Buble](https://buble.surge.sh) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-buble/master.svg)](https://travis-ci.org/jstransformers/jstransformer-buble)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-buble/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-buble)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-buble/master.svg)](http://david-dm.org/jstransformers/jstransformer-buble)
[![NPM version](https://img.shields.io/npm/v/jstransformer-buble.svg)](https://www.npmjs.org/package/jstransformer-buble)

## Installation

    npm install jstransformer-buble

## API

```js
var buble = require('jstransformer')(require('jstransformer-buble'))

buble.render('const answer = () => 42;').body
//=> 'var answer = function () { return 42; };'
```

## License

MIT
