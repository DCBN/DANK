var React = require('react');
var ReactDOM = require('react-dom');

var CategoryItem = React.createClass({
	displayName: 'CategoryItem',

	getInitialState: function() {
		return {
			Category: this.props.category
		}
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({Category: nextProps.category});
	},

	deleteCategory: function() {
		console.log('Delete me');
	},

	
	render: function() {
		return (
			<li className="categoryItem">{this.state.Category}
			<i className="icon icon-times" onClick={this.deleteCategory}></i></li>
		);
	}
});

module.exports = CategoryItem;