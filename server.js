const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/robots';
//above is referring to actual database name in db in this case called robots


const robotData = []
// pulls data sucessfully
//objects users with array of objects inside

const robotArray = robotData.users;
//console.log(robotArray);
//just an array of objects

app.use(express.static('public'));
//files that don't change can be served in this middleware above
//put into your public directory and serve from there
//these are made available to the public via express.static

app.get('/', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log(err);
    var users = db.collection('users')
    users.find((err, robots) => {
      console.log(robots);
      var collection = db.collection('users');
      // Find some documents
      collection.find({}).toArray(function(err, robots) {
        // console.log("Connected successfully to server");
        return res.render('robotPage', {
          robots: robots
          // console.log("Found the following records");
          // console.log(robots)
        })
      })
    });
  });
});

app.get('/hireRobot', function(req, res) {
  console.log('heyyy');
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    //above is saying it will throw an error that's built in if wrong
    var users = db.collection('users')
    // collection is a method causing it to look into database for 'users' or what you give it
    //db is defined meaning we can access
    //once this is declared above we can do things to this collection i.e. find stuff/crud ops/etc
      // Find some documents
      users.find({"job": null}).toArray(function(err, robots) {
        // console.log("Connected successfully to server");
        console.log('hello', robots);
        return res.render('hireRobot', {
          robots: robots
          // console.log("Found the following records");
          // console.log(robots)
        })
      })
  });
});

app.get('/employedRobot', function(req, res) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    //above is saying it will throw an error that's built in if wrong
    var users = db.collection('users')
    // collection is a method causing it to look into database for 'users' or what you give it
    //db is defined meaning we can access
    //once this is declared above we can do things to this collection i.e. find stuff/crud ops/etc
      // Find some documents
      users.find({"job": { $ne: null }}).toArray(function(err, robots) {
        // console.log("Connected successfully to server");
        console.log('hello', robots);
        return res.render('employedRobot', {
          robots: robots
          // console.log("Found the following records");
          // console.log(robots)
        })
      })
  });
});

/* first feed is robotPage and that will always be the page it is going to - second feed is content based this is an object for example:
  /* above sends in an object  -- always send in an object when using mustache */

app.get('/employedRobot', function(req, res) {
  let
})


app.get('/:id', function(req, res) {
  let chosenRobot = {};
  for (let i = 0; i < robotArray.length; i++) {

    if (robotArray[i].id === +req.params.id) {
      chosenRobot = robotArray[i]
    }
  }
  console.log(chosenRobot);
  res.render('indexRobot', chosenRobot)
});

app.listen(3000, function() {
  console.log('Application has started at port 3000')
});
// above allows app to run on port 3k and confirms via console log
