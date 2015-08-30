const node = require('when/node');
const fs = require('fs');

module.exports = node.liftAll(fs, (promisedFs, liftedFunc, name) => {
  promisedFs[name + 'Async'] = liftedFunc;
  return promisedFs;
});
