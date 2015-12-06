var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item');

var Content = React.createClass({
	displayName: 'Content',
		
	getIntitialState: function() {
		return {
			trending: []
		};
	},

	componentWillMount: function(){
		this.setState({title: 'Hello nigguh'});
		var apikey = '2b3cd597f318362b41a80c63bef6f5b291b271447605f768752b2225e3b88e72';
		$.ajax({
			type: 'GET',
			beforeSend: function(req){
				req.setRequestHeader('trakt-api-key', apikey);
			},
			url: 'https://api-v2launch.trakt.tv/movies/trending',
			dataType: 'json',
			success: function(data) {
				this.setState({
					trending: data
				});
			}.bind(this),
		});
	},

	render: function() {
		if(!this.state.trending) return false;
		return (
			<div className="something">	
				{
					this.state.trending.map(function(list){
						console.log(list);
						return <Item title={list.movie.title} key={list.movie.ids.trakt}/>;
					})
				}
			</div>
		);
	}
});

module.exports = Content;