import React, { Component } from 'react';
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
	    return (
	      <div className="newsFeed">
	        <Filter onFilter={this.handleFilter}/>
	        <h1 className="newsFeed__title">News</h1>
	        <button className="newsFeed__show-more" onClick={this.loadMoreNewsFeed}>Show more</button>
	      </div>
	    )
  	}
}



export default NewsFeed;