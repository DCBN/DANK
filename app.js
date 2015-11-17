var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var mongoose = require('mongoose');

/*mongoose.connect('mongodb://127.0.0.1:27017/infobase');
mongoose.model('users', {name: String});
app.get('/users', function(req, res) {
	mongoose.model('users').find(function(err, users) {
		res.send(users);
	});
});*/
// Views Directory
app.set('views', path.join(__dirname, 'views'));

// View Engine
app.set('view engine', 'hbs');

// Register Partials
hbs.registerPartials(__dirname + '/views/partials');

// Directory for static data (assets)
app.use(express.static(path.join(__dirname, 'assets')));

//Routes
require('./routes/landing.js')(app);
require('./routes/movies.js')(app);
require('./routes/tv-shows.js')(app);

var server = app.listen(1337, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at localhost:1337');
});