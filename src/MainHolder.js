import React, { Component } from "react";
import FolderHolder from "./FolderHolder";
import TaskHolder from "./TaskHolder";

class MainHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="column parent-width parent-height align-items-center justify-content-center ">
        <div>
          <div
            className="row shadow-m border-radius-m border-m bg-white"
            style={{ overflow: "hidden" }}
          >
            <FolderHolder />
            <TaskHolder />
          </div>
        </div>
      </div>
    );
  }
}

export default MainHolder;
