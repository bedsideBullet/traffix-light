import React, { Component } from "react";

export class ClassTrafficLight extends Component {
  state = { currentLight: 0 };
  lights = ["red", "green", "yellow"];

  nextLight = () => {
    this.setState({
      currentLight:
        this.state.currentLight + 1 <= 2 ? this.state.currentLight + 1 : 0,
    });
  };

  getCircleClass = (lightColor) => {
    return this.state.currentLight === this.lights.indexOf(lightColor)
      ? lightColor
      : "black";
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={"circle " + this.getCircleClass("red")}></div>
          <div className={"circle " + this.getCircleClass("yellow")}></div>
          <div className={"circle " + this.getCircleClass("green")}></div>
        </div>
        <button className="next-state-button" onClick={this.nextLight}>
          Next State
        </button>
      </div>
    );
  }
}
