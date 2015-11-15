var React = require('react');
var ReactDOM = require('react-dom');

var TVShows = React.createClass({
	displayName: 'TV-Shows',

	render: function() {
		return (
			<div className="TvShowWrap">
				<h1> TV-Shows </h1>
			</div>
		);
	}
});

module.exports = TVShows;