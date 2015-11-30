var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var GenreItem = React.createClass({
	displayName: 'GenreItem',

	getInitialState: function() {
		return {
			Genre: this.props.genre
		}
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({Genre: nextProps.genre});
	},

	deleteGenreItem: function(item) {
		console.log('Delete me');
		this.setState({
			Genre: update(this.props.Genre, {$splice: [[item, 1]]})
		});
	},

	
	render: function() {
		return (
			<li className="genreItem">{this.state.Genre}
			<i className="icon icon-times" onClick={this.deleteGenreItem}></i></li>
		);
	}
});

module.exports = GenreItem;