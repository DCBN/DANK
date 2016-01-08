var React = require('react');
var ReactDOM = require('react-dom');

var PlaylistViewer = require('./PlaylistViewer');

var PlaylistItem = React.createClass({
	displayName: 'PlaylistItem',

	getInitialState: function(){
		return {
			showViewer: false
		};
	},
	
	_showViewer: function(){
		this.setState({showViewer: true});
	},

	_closeViewer: function(){
		this.setState({showViewer: false});
	},

	render: function(){
		var itemStyle = {
			height: '40px',
			width: '100%',
			lineHeight: '40px',
			color: '#ADADAD',
			textAlign: 'center',
			padding: '0 5% 0 5%',
			background: '#212637',
			boxSizing: 'border-box',
			listStyleType: 'none',
			cursor: 'pointer',
		}
		return (
			<div className="playlistItem">	
				<li style={itemStyle} onClick={this._showViewer}> {this.props.playlist.name} </li>
				{this.state.showViewer ? <PlaylistViewer playlistName={this.props.playlist.name} items={this.props.playlist.items} close={this._closeViewer} /> : null}
			</div>
			);
	}
});
module.exports = PlaylistItem;