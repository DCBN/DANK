var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var actions = require('../actions/actions');

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

	_delete: function() {
		actions.removeGenre(this.props.genre);
	},

	
	render: function() {
		return (
			<li className="genreItem">{this.state.Genre}
			<i className="icon icon-times" onClick={this._delete}></i></li>
		);
	}
});

module.exports = GenreItem;