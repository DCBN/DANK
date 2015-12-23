var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({
	displayName: 'Item',


	render: function() {
		var poster = {
			backgroundImage: 'url(' + this.props.movie.images.poster.full + ')'
		}
		return (
			<div className="movieItem">
				<div className="movieImage" style={poster}></div>
				<div className="top">
					<h1>{this.props.title}</h1><span>{' (' +  this.props.movie.year + ')'}</span>
					<span className="movieGenres"> {this.props.movie.genres.join(', ')}</span>
				</div>
				<div className="center">
					<span className="movieGenres"> {this.props.movie.certification}</span>
					<span className="movieGenres"> {this.props.movie.runtime + ' min'} </span>
				</div>
			</div>
		);
	}
});

module.exports = Item;