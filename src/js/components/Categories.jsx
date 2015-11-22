var React = require('react');
var ReactDOM = require('react-dom');
var CategoryItem = require('./CategoryItem');

var Categories = React.createClass({
	displayName: 'Categories',

	getInitialState: function() {
		return {
			Category: []
		}
	},

	categorySearch: function(event) {
		if (event.which == 13 || event.keyCode == 13) {	
			this.setState({Category: this.state.Category.concat([event.target.value])});
			document.getElementById("category-input").value = '';
		} else {
			return true;
		}
	},
	
	render: function() {
		return (
			<div className="categories">
				<label className="category-label"> Categories </label>
				<input type="text" placeholder="Category" id="category-input" onKeyDown={this.categorySearch}/>
				<ul id="category-list">
				{	
					this.state.Category.map(function(category){	
					return <CategoryItem key={category} category={category}/>;
					})
				}
				</ul>
		</div>
		);
	}
});

module.exports = Categories;