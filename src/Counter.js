import React, { Component } from "react";

class Counter extends Component {
  // Create the initial state object of Counter component
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  displayEvenOddState = () => (this.state.counter % 2 === 0 ? "Even" : "Odd");

  render() {
    return (
      <div>
        <h1>The current count is {this.state.counter}</h1>
        <h2>The count is {this.displayEvenOddState()}</h2>
        <button onClick={this.handleClick}>Click me to increment count</button>
      </div>
    );
  }
}

export default Counter;
