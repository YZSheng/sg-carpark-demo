import React, { Component } from "react";
import SpinningCar from "./SpinningCar";
import Counter from "./Counter";
import CarparkData from "./CarparkData";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CarparkData />
          <SpinningCar className="App-logo" />
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
        </header>
      </div>
    );
  }
}

export default App;
