var React = require('react');
var ReactDOM = require('react-dom');
var Item = require('./Item');

var actions = require('../actions/actions');
var actionConstants = require('../constants/actionConstants');
var SearchStore = require('../stores/search-store');

var Content = React.createClass({
	displayName: 'Content',
	getInitialState: function(){
		return {
			results: [],
			error: ''
		}
	},

	componentDidMount: function(){
		{/*SearchStore.on(actionConstants.GET_TRENDING, this.waiting());*/}
		SearchStore.on(actionConstants.TRENDING_RESULT, this.loadResults());
		SearchStore.on(actionConstants.ERROR, this.showError());
	},

	componentWillUnmount: function(){
		{/*SearchStore.on(actionConstants.GET_TRENDING, this.waiting());*/}
		SearchStore.removeListener(actionConstants.TRENDING_RESULT, this.loadResults());
		SearchStore.removeListener(actionConstants.ERROR, this.showError());
	},

	loadResults: function() {
		this.setState({
			results: SearchStore.getTrending()
		});
		console.log(this.state.results);
	},

	showError: function() {
		this.setState({
			error: SearchStore.getError(),
			results: ''
		});
		console.log(this.state.error);
	},

	waiting: function() {
		actions.trending();
		this.setState({results: 'Waiting...'})
	},

	render: function() {
		{/*if(!this.state.trending) return false;
		return (
			<div className="movielist">	
				{
					this.state.trending.map(function(list){
						return <Item movie={list.movie} key={list.movie.ids.trakt}/>;
					})
				}
			</div>
		);
	*/}
	return (
		<div><button onClick={this.waiting}/>
		</div>
	)
}
});

module.exports = Content;