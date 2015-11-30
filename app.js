// Load process variables
var dotenv = require('dotenv');
dotenv.load();

var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');

mongoose.connect('mongodb://127.0.0.1:' + process.env.DB_PORT + '/' + process.env.DB_NAME);
require('./config/passport')(passport);
// Views Directory
app.set('views', path.join(__dirname, 'views'));

// View Engine
app.set('view engine', 'hbs');

// Register Partials
hbs.registerPartials(__dirname + '/views/partials');

// Directory for static data (assets)
app.use(express.static(path.join(__dirname, 'assets')));

app.use(session({secret: 'verysecretstring',
				saveUninitialized: true,
				resave: true}));

app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./routes/landing.js')(app);
require('./routes/movies.js')(app);
require('./routes/tv-shows.js')(app);
require('./routes/authRoutes.js')(app, passport);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at ' + process.env.HOST + ':' + process.env.PORT);
});