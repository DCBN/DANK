var React = require('react');
var ReactDOM = require('react-dom');
var GenreItem = require('./GenreItem');

var Genres = React.createClass({
	displayName: 'Genres',

	getInitialState: function() {
		return {
			Genre: []
		}
	},

	genreSearch: function(event) {
		if (event.which == 13 || event.keyCode == 13) {	
			this.setState({Genre: this.state.Genre.concat([event.target.value])});
			document.getElementById("genre-input").value = '';
		} else {
			return true;
		}
	},
	
	render: function() {
		return (
			<div className="genres">
				<label className="genre-label"> Genres </label>
				<input type="text" placeholder="Genre" id="genre-input" onKeyDown={this.genreSearch}/>
				<ul id="genre-list">
				{	
					this.state.Genre.map(function(genre){	
					return <GenreItem key={genre} genre={genre}/>;
					})
				}
				</ul>
		</div>
		);
	}
});

module.exports = Genres;