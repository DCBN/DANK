var React = require('react');
var ReactDOM = require('react-dom');

var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');

var Search = React.createClass({
	displayName: 'Search',
	prepareSearch: function(event){
		if (event.which == 13 || event.keyCode == 13) {	
			var searchString = event.target.value.split(' ').join('+');
			actions.search(searchString);
			document.getElementById("searchbar").value = '';
		} else {
			return true;
		}
	},
	render: function() {
		return (
			<input type="search" id="searchbar" placeholder="Search..." onKeyDown={this.prepareSearch}/>
		);
	}
});

module.exports = Search;