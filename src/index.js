// @todo create a real commande line
require('./jscs2doc')(require('path').resolve(process.cwd(), process.argv[2]), require('path').resolve(process.cwd(), process.argv[3]));
