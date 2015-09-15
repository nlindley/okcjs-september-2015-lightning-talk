var _ = require('highland');
var Dust = require('dustjs-linkedin');
var MongoClient = require('mongodb').MongoClient;
var HTTP = require('http');
var FS = require('fs');
var db;

var templateSrc = FS.readFileSync('./template.dust', 'utf8');
var compiled = Dust.compile(templateSrc, 'template');
Dust.loadSource(compiled);
var template = _.partial(Dust.stream, 'template');

function nameEmail(person) {
  return {
    name: person.firstName + ' ' + person.lastName,
    email: person.email
  };
}

function requestHandler(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  var findStream = db.collection('people').find({}).stream();
  var people = _.map(nameEmail, findStream);
  var context = {people: people};
  template(context).pipe(response);
}

var connectToDB = new Promise(function(fulfill, reject) {
  var uri = 'mongodb://localhost/okcjs-highland-demo';
  MongoClient.connect(uri, function(err, database) {
    if (err) {
      console.error(err);
      return reject(err);
    }

    db = database;
    fulfill(db);
  });
});

function startServer() {
  var server = HTTP.createServer(requestHandler);
  server.listen(3000);
}

connectToDB.then(startServer);
