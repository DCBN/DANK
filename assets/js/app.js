'use strict'

var React = require('react');
var test = require('./test');

var wrap = document.getElementById('wrapper');
if (wrap) {
	React.render(React.createElement("test", null), document.getElementById('wrapper'));
}