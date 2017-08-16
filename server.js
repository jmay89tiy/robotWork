const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const robots = require('./data');
const dal = require('./dal');
const robotArray = robots.users;

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'));
//files that don't change can be served in this middleware above
//put into your public directory and serve from there
//these are made available to the public via express.static

app.get('/home') function(request, response) {
  console.log(robotArray);
  response.render('index', { users: robotArray});
  /* above sends in an object  -- always send in an object when using mustache */
});

app.get('/home/:id') function (request, response) {
  const="chosenBot" = dal.robots.(request.params.id)
  if(chosenBot.id) {
    response.render('robotDetail', chosenBot)
  } else {
    response.send('no bots bro')
  }
})
// this is not finished above

app.listen(3000, function () {
  console.log('Application has started at port 3000')
})
// above allows app to run on port 3k and confirms via console log
