const p = require('path');

const argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .option('J', {
      alias: 'jscs',
      default: './.jscsrc',
      description: 'jscsrc file path',
      type: 'string'
    })
    .option('O', {
      alias: 'output',
      default: './README.html',
      description: 'HTML output file path',
      type: 'string'
    })
    .help('h')
    .alias('h', 'help')
    .version()
    .argv;

const resolve = path => p.resolve(process.cwd(), path);

require('./jscs2doc')(resolve(argv.jscs), resolve(argv.output));
