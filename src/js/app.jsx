var React = require('react');
var ReactDOM = require('react-dom');
var Landing = require('./components/landing');
var TVShows = require('./components/TVShows');
var Movies = require('./components/Movies');

var landingWrap =  document.getElementById('landingWrap');
if(landingWrap){
	ReactDOM.render(<Landing />, document.getElementById('landingWrap'));
}

var TvShowContainer = document.getElementById('tvshow-container');
if(TvShowContainer){
	ReactDOM.render(<TVShows />, document.getElementById('tvshow-container'));
}

var MovieContainer = document.getElementById('movie-container');
if(MovieContainer){
	ReactDOM.render(<Movies />, document.getElementById('movie-container'));
}