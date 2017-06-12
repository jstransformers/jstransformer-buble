'use strict'

const buble = require('buble')

exports.name = 'buble'
exports.outputFormat = 'js'

exports.render = function (str, options) {
  const out = buble.transform(str, options)
  return out.code
}
