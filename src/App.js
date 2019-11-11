import React, { Component } from 'react';
import './App.css';

import SearchApp from './SearchApp/SearchApp.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  setResults(results) {
    // console.log(results);
    // console.log(volumeInfo);
    // console.log(saleInfo);
    console.log('setting results!');
    // this.setState({
    // bookmarks: [...this.state.bookmarks, bookmark],
    // showAddForm: false
    // });
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Google Book Search</h1>
          <SearchApp
            handleSearch={results => this.setResults(results)}
          ></SearchApp>
        </header>
      </div>
    );
  }
}

export default App;
