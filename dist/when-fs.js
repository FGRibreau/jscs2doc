'use strict';

var node = require('when/node');
var fs = require('fs');

module.exports = node.liftAll(fs, function (promisedFs, liftedFunc, name) {
  promisedFs[name + 'Async'] = liftedFunc;
  return promisedFs;
});