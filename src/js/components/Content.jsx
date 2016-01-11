var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item');
var PlaylistSelector = require('./PlaylistSelector');

var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');

var Content = React.createClass({
	displayName: 'Content',
	getInitialState: function(){
		actions.trending();
		actions.getPlaylists();
		SearchStore.getTrending();
		SearchStore.getPlaylists();
		return {
			showSelector: false
		};
	},
	componentDidMount: function(){
		{/*SearchStore.on(actionConstants.GET_TRENDING, this.waiting());*/}
		SearchStore.addChangeListener(this.loadResults);
		SearchStore.addChangeListener(this.showError);
	},

	componentWillUnmount: function(){
		{/*SearchStore.on(actionConstants.GET_TRENDING, this.waiting());*/}
		SearchStore.removeListener(this.loadResults);
		SearchStore.removeListener(this.showError);
	},

	loadResults: function() {
		this.setState(SearchStore.getTrending());
		this.setState(SearchStore.getPlaylists());
	},

	showError: function() {
		this.setState(SearchStore.getError())
	},

	toggleSelector: function(movie){
		this.setState({
			movie: movie,
			showSelector: !this.state.showSelector
		});
	},

	render: function() {
		if(!this.state.list) return false;
		var items = 
				this.state.list.map(function(item){
					return <Item movie={item.movie} key={item.movie.ids.trakt} toggle={this.toggleSelector.bind(this, item.movie.ids.trakt)}/>
				}.bind(this));
		return (
			<div className="movielist">	
				<div>{items}</div>
				{this.state.showSelector ? <PlaylistSelector movie={this.state.movie} playlists={this.state.playlists} toggle={this.toggleSelector}/> : null}
			</div>
		);
	}
});

module.exports = Content;