var React = require('react');
var ReactDOM = require('react-dom');

var PlaylistItem = React.createClass({
	displayName: 'PlaylistViewer',

	render: function(){
		var movieArray = this.props.items.map(function(movie){
			movie.title = movie[0].movie.title;
			movie.poster = movie[0].movie.images.poster.full;
			movie.image = movie[0].movie.images.fanart.full;
			return movie;
		}.bind(this));
		return (
			<div id="playlistViewer">	
				{movieArray.map(function(movie){
					var style = {backgroundImage: 'url(' + movie.image + ')'};
					return <div className="playlistItem" style={style}><img className="playlistPoster" src={movie.poster} /><li className="playlistTitle"> {movie.title} </li></div>;
				}.bind(this))}
			<li id="viewerClose" onClick={this.props.close}>Close</li>
			</div>
		);
	}
});
module.exports = PlaylistItem;