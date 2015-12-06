var React = require('react');
var ReactDOM = require('react-dom');
var Landing = require('./components/landing');
var Genres = require('./components/Genres');
var Content = require('./components/Content');
var Search = require('./components/Search');

var landingWrap =  document.getElementById('landingWrap');
if(landingWrap){
	ReactDOM.render(<Landing />, document.getElementById('landingWrap'));
}


var GenreWrap = document.getElementById('genres');
if(GenreWrap){
	ReactDOM.render(<Genres />, document.getElementById('genres'));
}

var ContentWrap = document.getElementById('contentWrap');
if(ContentWrap){
	ReactDOM.render(<Content />, document.getElementById('contentWrap'));
}

var SearchWrap = document.getElementById('searchWrap');
if(SearchWrap){
	ReactDOM.render(<Search />, document.getElementById('searchWrap'));
}
