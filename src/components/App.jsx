import React, { Component } from 'react';
import '../css/App.css';

import NewsFeed from './NewsFeed';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsFeed />
      </div>
    );
  }
}
export default App;