var Dispatcher = require('flux').Dispatcher;
var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
// Views Directory
app.set('views', path.join(__dirname, 'views'));

// View Engine
app.set('view engine', 'hbs');

// Register Partials
hbs.registerPartials(__dirname + '/views/partials');

// Directory for static data (assets)
app.use(express.static(path.join(__dirname, 'assets')));

require('./routes/index.js')(app);

var server = app.listen(1337, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at localhost:1337');
});