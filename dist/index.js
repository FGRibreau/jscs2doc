'use strict';

var p = require('path');

var argv = require('yargs').usage('Usage: $0 <command> [options]').option('J', {
  alias: 'jscs',
  default: './.jscsrc',
  description: 'jscsrc file path',
  type: 'string'
}).option('O', {
  alias: 'output',
  default: './README.html',
  description: 'HTML output file path',
  type: 'string'
}).help('h').alias('h', 'help').version().argv;

var resolve = function resolve(path) {
  return p.resolve(process.cwd(), path);
};

require('./jscs2doc')(resolve(argv.jscs), resolve(argv.output));