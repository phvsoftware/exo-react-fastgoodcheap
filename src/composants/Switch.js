import React, { Component } from "react";
import "./Switch.css";

class Switch extends Component {
  render = () => {
    const { onOff, color } = this.props;
    console.log("render switch", onOff);
    return (
      <div>
        {!onOff && (
          <div className="switch-off" style={{ backgroundColor: "#ccc" }} onClick={this.props.handleClick}>
            <span className="slider-off" style={{ backgroundColor: "#ccc" }}></span>
          </div>
        )}
        {onOff && (
          <div className="switch-on" style={{ backgroundColor: color }} onClick={this.props.handleClick}>
            <span className="slider-on" style={{ backgroundColor: color }}></span>
          </div>
        )}
      </div>
    );
  };
}

export default Switch;
