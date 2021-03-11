import React, { Component } from "react";
import "./Common.css";

class CustomButton extends Component {
  render() {
    return (
      <div
        className={
          "border-radius-s fs-r pl-r pr-r pt-s pb-s text-white cursor-hand " +
          this.props.className
        }
        onClick={() => {
          if (this.props.handler !== null && this.props.handler !== undefined) {
            this.props.handler();
          } else {
            alert("Handler is not assigned");
          }
        }}
      >
        {this.props.title}
      </div>
    );
  }
}

export default CustomButton;
