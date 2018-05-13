import React, { Component } from 'react';

class NewsCard extends Component {

  formatDate(date) {
    let publishedDate = new Date(date);
    let publishDay = publishedDate.getDate();
    let publishMonth = publishedDate.getMonth() + 1;
    let publishYear = publishedDate.getFullYear();
    let formattedDate = publishDay +'/'+ publishMonth +'/' + publishYear 
    return formattedDate;
  }

  render() {
    return (
      <div className="newsFeed__card">
        <a target="_blank" href={this.props.value.url}><h2>{this.props.value.title}</h2></a>
        <span className="card__date">{this.formatDate(this.props.value.publishedAt)}</span>
        <span className="card__source">{this.props.value.source.name}</span>
      </div>
    )
  }
}

export default NewsCard