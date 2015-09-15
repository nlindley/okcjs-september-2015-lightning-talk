var fs = require('fs');

var file = fs.createReadStream('./LICENSE');
file.pipe(process.stdout);
