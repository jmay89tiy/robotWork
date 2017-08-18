const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

const robotData = require('./public/data.js');
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
      res.render('robotPage', {
        users: robotData.users
      });
    });
      /* first feed is robotPage and that will always be the page it is going to - second feed is content based this is an object for example:
 });
  /* above sends in an object  -- always send in an object when using mustache */

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
