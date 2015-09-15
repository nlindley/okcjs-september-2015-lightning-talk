var _ = require('highland');
var JSONStream = require('JSONStream');
var MongoClient = require('mongodb').MongoClient;
var HTTP = require('http');
var db;

function nameEmail(person) {
  return {
    name: person.firstName + ' ' + person.lastName,
    email: person.email
  };
}

function requestHandler(request, response) {
  response.writeHead(200, {'Content-Type': 'application/json'});
  var people = db.collection('people').find({}).stream();
  var json = JSONStream.stringify();
  _(people).map(nameEmail).pipe(json).pipe(response);
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
