var React = require('react');
var ReactDOM = require('react-dom');
var PlaylistCreator = require('./PlaylistCreator');
var SearchStore = require('../stores/search-store');

var Playlist = React.createClass({
	displayName: 'Playlist',
	getInitialState: function(){
		SearchStore.getPlaylists()
		return {
			showCreator: false
		};
	},

	componentDidMount: function(){
		SearchStore.addChangeListener(this.loadPlaylists);
	},

	componentWillUnmount: function(){
		SearchStore.removeListener(this.loadPlaylists);
	},

	loadPlaylists: function(){
		this.setState(SearchStore.getPlaylists());
	},
	_playlistCreator: function(){
		this.setState({showCreator: true});
	},
	_close: function(){
		this.setState({showCreator: false});
	},
	render: function(){
	if(!this.state.playlists) return false;
	return (
		<div id="playlist-container">
				<h2> Playlists </h2>
				{this.state.playlists.map(function(item){
					return <li className="genreItem">{item.name}</li>;
				})}
				<a href="#" id="create-playlist" onClick={this._playlistCreator}>Create new playlist</a>
				{this.state.showCreator ? <PlaylistCreator close={this._close} /> : null}
		</div>
	)
	}
});

module.exports = Playlist;
