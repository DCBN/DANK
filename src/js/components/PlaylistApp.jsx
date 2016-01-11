var React = require('react');
var ReactDOM = require('react-dom');
var PlaylistCreator = require('./PlaylistCreator');
var PlaylistItem = require('./PlaylistItem');
var PlaylistViewer = require('./PlaylistViewer');
var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');



var PlaylistApp = React.createClass({
	displayName: 'PlaylistApp',
	getInitialState: function(){
		actions.getPlaylists();
		SearchStore.getPlaylists();
		return {
			showCreator: false,
			showViewer: false
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
		this.setState({showCreator: !this.state.showCreator});
	},
	_showViewer: function(id){
		actions.getPlaylist(id);
		this.setState(SearchStore.getPlaylist());
		this.setState({showViewer: !this.state.showViewer});
	},
	render: function(){
	if(!this.state.playlists) return false;
	var playlistStyle = {
			marginBottom: '20px',
			width: '80%',
			paddingLeft: '10%'
	}
	var userlists = 
		this.state.playlists.map(function(item){
			return <PlaylistItem showViewer={this._showViewer.bind(this, item.id)} playlist={item}/>
		}.bind(this));
	return (
		<div id="playlist-container">
				<div id="playlists" style={playlistStyle}>	
					<h2> Playlists </h2>
				</div>
				{
					this.state.playlists.map(function(item){
						return <PlaylistItem showViewer={this._showViewer.bind(this, item.id)} playlist={item}/>
					}.bind(this))
				}
				<a href="#" id="create-playlist" onClick={this._playlistCreator}>Create new playlist</a>
				{this.state.showCreator ? <PlaylistCreator close={this._playlistCreator} /> : null}
				{this.state.showViewer ? <PlaylistViewer items={this.state.playlist} close={this._showViewer}/> : null}
		</div>
	)
	}
});

module.exports = PlaylistApp;
