var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item');

var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');

var Content = React.createClass({
	displayName: 'Content',
	getInitialState: function(){
		actions.trending();
		return SearchStore.getTrending();
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
	},

	showError: function() {
		this.setState(SearchStore.getError())
	},

	render: function() {
		if(!this.state.list) return false;
		return (
			<div className="movielist">	
				{
					this.state.list.map(function(item){
						return <Item movie={item.movie} key={item.movie.ids.trakt}/>;
					})
				}
			</div>
		);
	}
});

module.exports = Content;