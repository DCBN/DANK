'use strict'

var React = require('react');
var Test = require('./Test');

var wrap = document.getElementById('wrapper');
if (wrap) {
	React.render(<Test />, document.getElementById('wrapper'));
}