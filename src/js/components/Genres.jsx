var React = require('react');
var ReactDOM = require('react-dom');
var GenreItem = require('./GenreItem');

var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');

var Genres = React.createClass({
	displayName: 'Genres',

	getInitialState: function() {
		return SearchStore.getGenres();
	},

	componentDidMount: function(){
		SearchStore.addChangeListener(this.loadGenres);
	},

	componentWillUnmount: function(){
		SearchStore.removeListener(this.loadGenres);
	},

	genreSearch: function(event) {
		if (event.which == 13 || event.keyCode == 13) {	
			actions.addGenre(event.target.value);
			document.getElementById("genre-input").value = '';
		} else {
			return true;
		}
	},
	loadGenres: function(){
		this.setState(SearchStore.getGenres());
	},
	
	render: function() {
		if(!this.state.genres) return false;
		return (
			<div className="genres">
				<label className="genre-label"> Genres </label>
				<input type="text" placeholder="Genre" id="genre-input" onKeyDown={this.genreSearch}/>
				<ul id="genre-list">
				{	
					this.state.genres.map(function(genre){	
					return <GenreItem key={genre} genre={genre}/>;
					})
				}
				</ul>
		</div>
		);
	}
});

module.exports = Genres;