import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apple: 'sapple'
      // bookmarks: [],
      // showAddForm: false
    };
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Google Book Search</h1>
          <p>{this.state.apple}</p>
          <input></input>
        </header>
      </div>
    );
  }
}

export default App;
