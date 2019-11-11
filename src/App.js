import React, { Component } from 'react';
import './App.css';

import SearchApp from './SearchApp/SearchApp.js';
import ResultsList from './ResultsList/ResultsList.js';


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
    // console.log('setting results!');

    // this.setState({
    // bookmarks: [...this.state.bookmarks, bookmark],
    // showAddForm: false
    // });
    this.setState({
      results: results
    });
    console.log(this.state.results);
  }

  render() {
    return (
      <div className="App" >
        <h1>Google Book Search</h1>
        <SearchApp
          handleSearch={results => this.setResults(results)}
        ></SearchApp>
        <ResultsList
          results={this.state.results}
        ></ResultsList>
        {/* <p>{this.state.results}</p> */}
        {/* <li>
          <p>testing</p>
          <p>testing</p>
          <p>testing</p>
        </li> */}
      </div>
    );
  }
}

export default App;
