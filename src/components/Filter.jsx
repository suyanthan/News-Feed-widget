import React, { Component } from 'react';
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSoruce: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.apiUrl = 'https://newsapi.org/v2/sources?language=en&apiKey=f5002ab5bbfe40a39ade2a0d65fc3b73';
  }

  handleChange(event) {
    this.props.onFilter(event.target.value);
  }


  componentWillMount() {
    fetch(this.apiUrl).then((response) => {
      return response.json();
    }).then((newsSoruce) => {
      this.setState({ newsSoruce: newsSoruce.sources });
    });
  }

  render() {
    return (
      <div className="newsFeed__source">
        <select onChange={this.handleChange}>
          <option key="all" value="all">Filter By Source</option>
          {this.state.newsSoruce.map((sourceList, i) => {
            return (
              <option key={i} value={sourceList.id}>
                {sourceList.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default Filter;