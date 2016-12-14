'use strict'

var buble = require('buble')

exports.name = 'buble'
exports.outputFormat = 'js'

exports.render = function (str, options) {
  var out = buble.transform(str, options)
  return out.code
}
