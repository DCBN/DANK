var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');

var PlaylistSelector = React.createClass({
	displayName: 'PlaylistSelector',
	addToPlaylist: function(id){
		actions.addToPlaylist(id, this.props.movie);
		this.props.toggle();
	},

	render: function() {
		var self = this;
		if(!this.props.playlists) return false;
		return (
			<div className="playlist-selector-container">
			<div className="creatorBody">
				{this.props.playlists.map(function(playlist){
					return <li onClick={self.addToPlaylist.bind(self, playlist.id)}>{playlist.name}</li>;
				})}
				<li onClick={this.props.toggle}>Close</li>
			</div>
		</div>
		);
	}
});

module.exports = PlaylistSelector;