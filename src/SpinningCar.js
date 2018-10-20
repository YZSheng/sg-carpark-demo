import React, { Component } from "react";
import car from "./car.svg";

class SpinningCar extends Component {
  render() {
    return <img src={car} className={this.props.className} alt="logo" />;
  }
}

export default SpinningCar;
