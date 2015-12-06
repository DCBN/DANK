var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({
	displayName: 'Search',
	render: function() {
		return (
			<input type="search" className="searchbar" placeholder="Search..."/>
		);
	}
});

module.exports = Search;