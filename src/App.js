import React, { Component } from 'react';
import logo from './iconfinder_weather01_4102328.svg';
import './App.css';
// import './bootstrap.min.css';
import "@ui5/webcomponents/dist/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ui5-button type="Default">Enabled</ui5-button>

        </header>
      </div>
    );
  }
}

export default App;
