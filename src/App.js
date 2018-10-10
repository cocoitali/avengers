import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      avengers: ['Iron-man', 'Black Widow', 'Hawkeye', 'Hulk', 'Thor'] 
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Avengers: by Courtney
        </header>
        {this.state.avengers.map(avenger => <div key ={avenger}>{avenger}</div>)}
      </div>
    );
  }
}

export default App;
