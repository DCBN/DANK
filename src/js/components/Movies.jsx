var React = require('react');
var ReactDOM = require('react-dom');

var Movies = React.createClass({
	displayName: 'Movies',

	render: function() {
		return (
			<div className="MovieWrap">
				<h1> Movies </h1>
			</div>
		);
	}
});

module.exports = Movies;