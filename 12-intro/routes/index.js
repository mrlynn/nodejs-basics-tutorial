var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';


/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, client) {
    // Create a collection we want to drop later
    const dbName = 'test';
    const col = client.db(dbName).collection('user-data');
    // Insert a bunch of documents
    test.equal(null, err);
    // Show that duplicate records got dropped
    col.find({}).toArray(function(err, items) {
      test.equal(null, err);
      client.close();
      res.render('index',{ items: items})
    });
    });
  //res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/write', function(req, res, next) {
  MongoClient.connect(url, function(err, client) {
    // Create a collection we want to drop later
    const dbName = 'test';
    const col = client.db(dbName).collection('user-data');
    // Insert a bunch of documents
    test.equal(null, err);
    // Show that duplicate records got dropped
    col.find({}).toArray(function(err, items) {
      test.equal(null, err);
      client.close();
      res.render('index',{ items: items})
    });
    });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
