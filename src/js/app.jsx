var React = require('react');
var ReactDOM = require('react-dom');
var Landing = require('./components/landing');
var Genres = require('./components/Genres');

var landingWrap =  document.getElementById('landingWrap');
if(landingWrap){
	ReactDOM.render(<Landing />, document.getElementById('landingWrap'));
}


var GenreWrap = document.getElementById('genres');
if(GenreWrap){
	ReactDOM.render(<Genres />, document.getElementById('genres'));
}
