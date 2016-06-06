# jstransformer-buble

[Buble](https://buble.surge.sh) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-buble/master.svg)](https://travis-ci.org/jstransformers/jstransformer-buble)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-buble/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-buble?branch=master)
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
