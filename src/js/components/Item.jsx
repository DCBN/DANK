var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({
	displayName: 'Item',
		
	getIntitialState: function() {
		return {
			title: this.props.title
		};
	},

	componentWillReceiveProps: function(nextProps) {
		console.log(nextProps);
	},


	render: function() {
		return (
			<div className="item">{this.props.title}</div>
		);
	}
});

module.exports = Item;