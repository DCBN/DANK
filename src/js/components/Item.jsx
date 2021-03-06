var React = require('react');
var ReactDOM = require('react-dom');

var Item = React.createClass({
	displayName: 'Item',
	toggle: function(){
		this.props.toggleHandler();
	},

	render: function() {
		if(this.props.movie.certification == "" || typeof this.props.movie.genres === "undefined") {
			this.props.movie.certification = "";
		}
		else {
			var fixedCertification =  this.props.movie.certification + " | ";
		}
		if(this.props.movie.runtime == "" || typeof this.props.movie.runtime === "undefined") {
			this.props.movie.runtime = "";
		}
		else {
			var fixedRuntime =  this.props.movie.runtime + ' min' + ' | ';
		}
		if(this.props.movie.year == "" || typeof this.props.movie.year === "undefined") {
			this.props.movie.year = "";
		} else {
			var fixedYear = this.props.movie.year;
		}
		if(this.props.movie.genres == "" || typeof this.props.movie.genres === "undefined") {
			this.props.movie.genres = "";
		} else {
			var fixedGenres = 'Genres: ' + this.props.movie.genres.join(', ');
		}
		if(!this.props.movie.images.poster.full) {
			var poster = {
			backgroundImage: 'url(../img/poster-not-found.png)'
		}
		} else {
		var poster = {
			backgroundImage: 'url(' + this.props.movie.images.poster.full + ')'
		}
		}
		return (
			<div className="movieItem" style={poster}>
				<div className="itemInfo">
					<div className="itemSection">	
						<span className="itemTitle">{this.props.movie.title}</span>
					</div>
					<div className="itemSection">	
						<span className="itemFacts">{fixedCertification}{fixedRuntime}{fixedYear}</span>
					</div>
					<div className="itemSection">
						<span className="itemGenres">{fixedGenres}</span>
					</div>
					<div className="itemSection">
						<span className="addToPlaylist" onClick={this.props.toggle}>Add to playlist</span>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Item;