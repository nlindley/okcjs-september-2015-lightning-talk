var _ = require('highland');

var myStream = _();
myStream.write(1);
myStream.write(2);
myStream.write(3);
myStream.end();

myStream.map(_.log).resume();
