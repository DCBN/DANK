var React = require('react');
var ReactDOM = require('react-dom');
var Categories = require('./Categories');

var Movies = React.createClass({
	displayName: 'Movies',

	
	render: function() {
		return (
			<div className="jsx-wrapper">
				<div id="left" className="side-panel">
					<div className="logo"><h2>Qlist</h2></div>
					<div className="menu">
						<ul>
							<li className="menu-item"><a href="#">Movies</a></li>
							<li className="menu-item"><a href="#">TV-Shows</a></li>
						</ul>
					</div>
					<Categories />
				</div>
				<div id="middle">
					<input type="search" className="searchbar" placeholder="Search..."/>
				</div>
				<div id="right" className="side-panel"></div>
			</div>
		);
	}
});

module.exports = Movies;