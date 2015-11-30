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
					<a id="facebook" className="btn" href="/auth/facebook"><i className="icon icon-facebook-official"></i> Facebook </a>
					<a id="google" className="btn" href="/auth/google"><i className="icon icon-google-plus"></i>&nbsp; Google </a>
			</div>
		);
	}
});

module.exports = Landing;