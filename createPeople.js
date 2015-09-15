var Faker = require('faker');
var FactoryGirl = require('factory_girl');
var MongoClient = require('mongodb').MongoClient;

FactoryGirl.define('person', function() {
  this.firstName = Faker.name.firstName();
  this.lastName = Faker.name.lastName();
  this.address = {
    street: Faker.address.streetAddress(),
    city: Faker.address.city(),
    state: Faker.address.state(),
    zip: Faker.address.zipCode()
  };
  this.email = Faker.internet.email();
  this.phone = Faker.phone.phoneNumber();
});

function createPeople(err, db) {
  var docs = FactoryGirl.createLists('person', 100000);
  db.collection('people').insertMany(docs, db.close.bind(db));
}

var url = 'mongodb://localhost:27017/okcjs-highland-demo';
MongoClient.connect(url, createPeople);
