import React, { Component } from "react";

import ic_check_mark from "./assets/ic_check_mark.png";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.selected,
    });
  }
  render() {
    return (
      <div
        className="border-m border-radius-s bg-gray1 mr-m cursor-hand"
        style={{ width: 12, height: 12, padding: 3 }}
        onClick={() => this.props.handler()}
      >
        {this.state.selected && (
          <img className="parent-width" style={{}} src={ic_check_mark} alt="" />
        )}
      </div>
    );
  }
}

export default CheckBox;
