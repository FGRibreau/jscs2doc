// @todo create a real commande line
require('./jscs2doc')(require('path').resolve(__dirname, '..', process.argv[2]), require('path').resolve(__dirname, '..', process.argv[3]));
