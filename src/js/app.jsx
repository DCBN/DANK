var React = require('react');
var ReactDOM = require('react-dom');
var Landing = require('./components/landing');
var TVShows = require('./components/TVShows');
var Movies = require('./components/Movies');

var landingWrap =  document.getElementById('landingWrap');
if(landingWrap){
	ReactDOM.render(<Landing />, document.getElementById('landingWrap'));
}

var TvShowWrap = document.getElementById('TvShowWrap');
if(TvShowWrap){
	ReactDOM.render(<TVShows />, document.getElementById('TvShowWrap'));
}

var MovieWrap = document.getElementById('MovieWrap');
if(MovieWrap){
	ReactDOM.render(<Movies />, document.getElementById('MovieWrap'));
}