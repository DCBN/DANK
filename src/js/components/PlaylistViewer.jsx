var React = require('react');
var ReactDOM = require('react-dom');

var PlaylistItem = React.createClass({
	displayName: 'PlaylistViewer',

	render: function(){
		return (
			<div id="playlistViewer">
				<h1> {this.props.playlistName} </h1>	
				{this.props.items.map(function(item){
					return <li> {item.name} </li>;
				})}
			<li onClick={this.props.close}>Close</li>
			</div>
		);
	}
});
module.exports = PlaylistItem;