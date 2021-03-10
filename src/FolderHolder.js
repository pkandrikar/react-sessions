import React, { Component } from "react";
import CustomButton from "./CustomButton";
class FolderHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="column pt-m pb-m pl-m pr-m bg-gray1"
        style={{ height: 500, width: 300 }}
      >
        <div className="row-reverse ">
          <CustomButton
            className="bg-blue"
            title="+ Add Folder"
            handler={this.addtaskButtonClicked}
          />
        </div>
        <div className="fw-b fs-m">My Folders</div>
      </div>
    );
  }
}

export default FolderHolder;
