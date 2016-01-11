var React = require('react');
var ReactDOM = require('react-dom');


var PlaylistItem = React.createClass({
	displayName: 'PlaylistItem',

	render: function(){;
		console.log(this.props.playlist.name);
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
				<li style={itemStyle} onClick={this.props.showViewer}> {this.props.playlist.name} </li>
			</div>
			);
	}
});
module.exports = PlaylistItem;