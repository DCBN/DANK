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
		this.props.close();
	},
	render: function(){
	var style = {
		backgroundColor: 'green'
	};
	return (
		<div id="playlist-creator-container">
			<div className="creatorBody">
				<div id="creatorTop">
					<h2> Create new playlist </h2>
				</div>
				<div id="creatorMid">
					<input id="playlistInput" type="text" placeholder="Name of playlist"/>
				</div>
				<div id="creatorBottom">
					<a className="btn facebook" style={style} onClick={this._playlistSave}> Save </a>
					<a className="btn google" onClick={this.props.close}> Cancel </a>
				</div>
			</div>
		</div>
	)
	}
});

module.exports = PlaylistCreator;
