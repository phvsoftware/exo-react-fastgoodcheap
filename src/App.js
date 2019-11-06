import React, { Component } from "react";
import "./App.css";
import Switch from "./composants/Switch";

class App extends Component {
  state = {
    switch1: true,
    switch2: false,
    switch3: false
  };

  onClick1 = () => {
    let { switch1, switch2, switch3 } = this.state;
    console.log("onClick1");
    switch1 = !switch1;
    if (switch1 && switch2 && switch3) {
      if (Math.round(Math.random() * 2) === 1) {
        switch2 = false;
      } else {
        switch3 = false;
      }
    }
    this.setState({ switch1: switch1, switch2: switch2, switch3: switch3 });
  };

  onClick2 = () => {
    let { switch1, switch2, switch3 } = this.state;
    console.log("onClick2");
    switch2 = !switch2;
    if (switch2 && switch1 && switch3) {
      if (Math.round(Math.random() * 2) === 1) {
        switch3 = false;
      } else {
        switch1 = false;
      }
    }
    this.setState({ switch1: switch1, switch2: switch2, switch3: switch3 });
  };

  onClick3 = () => {
    let { switch1, switch2, switch3 } = this.state;
    console.log("onClick3");
    switch3 = !switch3;
    if (switch3 && switch1 && switch2) {
      if (Math.round(Math.random() * 2) === 1) {
        switch2 = false;
      } else {
        switch1 = false;
      }
    }
    this.setState({ switch1: switch1, switch2: switch2, switch3: switch3 });
  };

  render = () => {
    const { switch1, switch2, switch3 } = this.state;
    console.log("render APP", switch1, switch2, switch3);
    return (
      <div className="App">
        <div className="box">
          <div className="box-line">
            <Switch onOff={switch1} color="#2196f3" handleClick={this.onClick1}></Switch>
            <h1>Fast</h1>
          </div>
          <div className="box-line">
            <Switch onOff={switch2} color="#ff0000" handleClick={this.onClick2}></Switch>
            <h1>Good</h1>
          </div>
          <div className="box-line">
            <Switch onOff={switch3} color="#00ff00" handleClick={this.onClick3}></Switch>
            <h1>Cheap</h1>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
