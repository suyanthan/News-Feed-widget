import React, { Component } from 'react';
import NewsCard from './NewsCard';
import Filter from './Filter';
class NewsFeed extends Component {
  	constructor(props) {
	    super(props);
	    this.state = {
	      	newsFeed: [],
	      	pagination:1, //default
	      	selectedSource:"all" //if no source selected then pick news randomly 
	    }
	    this.handleFilter = this.handleFilter.bind(this);
  	}

  	componentWillMount() {
    	this.fetchPosts();
  	}

  	fetchPosts(isSourceChanged=false) {
  		let apiUrl;
  		if(this.state.selectedSource === "all"){
			apiUrl = `https://newsapi.org/v2/top-headlines?language=en&apiKey=f5002ab5bbfe40a39ade2a0d65fc3b73`
  		}else{
  			apiUrl = `https://newsapi.org/v2/top-headlines?sources=${this.state.selectedSource}&apiKey=f5002ab5bbfe40a39ade2a0d65fc3b73`
  		}
		fetch(`${apiUrl}&pageSize=5&page=${this.state.displayStory}`).then((response) => {
      		return response.json();
    	}).then((data) => {
	      	if(isSourceChanged === false){
		        let activeNewsFeed = this.state.newsFeed;
		        activeNewsFeed.push.apply(activeNewsFeed,data.articles)
		        this.setState({newsFeed:activeNewsFeed});
	      	}else{
	        	this.setState({newsFeed:data.articles});
	     	}
    	});
	}

  	handleFilter(filter) {
	    this.setState(() => ({pagination:1,selectedSource:filter}), () =>{
	      this.fetchPosts(true);
	    });
  	}

	loadMoreNewsFeed = () => {
	    this.setState((prevState) => ({pagination: (prevState.pagination + 1)
	    }), () => {
	      this.fetchPosts();
	    });    
	}

  	render() {
	    const newsCards = this.state.newsFeed.map((news, index) =>
	      <NewsCard key={index} value={news} />
	    );

	    return (
	      <div className="newsFeed">
	        <Filter onFilter={this.handleFilter}/>
	        <h1 className="newsFeed__title">News</h1>
	        {newsCards}
	        <button className="newsFeed__show-more" onClick={this.loadMoreNewsFeed}>Show more</button>
	      </div>
	    )
  	}
}



export default NewsFeed;
