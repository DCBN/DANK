var React = require('react');
var ReactDOM = require('react-dom');

var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');

var PlaylistCreator = React.createClass({
	displayName: 'PlaylistCreator',
	_playlistSave: function(){
		var playlistName = document.getElementById('playlistInput').value.trim();
		actions.savePlaylist(playlistName);
	},
	render: function(){
	return (
		<div id="playlist-creator-container">
			<div id="creatorBody">
				<div id="creatorTop">
					<h2> Create new playlist </h2>
				</div>
				<div id="creatorMid">
					<input id="playlistInput" type="text" placeholder="Name of playlist"/>
				</div>
				<div id="creatorBottom">
					<a id="playlistSave" className="btn" onClick={this._playlistSave}> Save </a>
					<a id="playlistCancel" className="btn" onClick={this.props.close}> Cancel </a>
				</div>
			</div>
		</div>
	)
	}
});

module.exports = PlaylistCreator;
