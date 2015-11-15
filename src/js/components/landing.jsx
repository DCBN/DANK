var React = require('react');
var ReactDOM = require('react-dom');

var Landing = React.createClass({
	displayName: 'LandingPage',

	render: function() {
		return (
			<div className="landing-container">
				<div className="banner">	
					<h1>DANK</h1>
					<p>Your movie queue for netflix </p>
				</div>
					<a id="movies" className="btn" href="/movies"> Movies </a>
					<a id="tvshows" className="btn" href="/tvshows"> TV Shows </a>
			</div>
		);
	}
});

module.exports = Landing;