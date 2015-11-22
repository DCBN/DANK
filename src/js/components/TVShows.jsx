var React = require('react');
var ReactDOM = require('react-dom');

var TVShows = React.createClass({
	displayName: 'TV-Shows',

	render: function() {
		return (
			<div className="jsx-wrapper">
				<div id="left" className="side-panel"></div>
				<div id="middle"></div>
				<div id="right" className="side-panel"></div>
			</div>
		);
	}
});

module.exports = TVShows;