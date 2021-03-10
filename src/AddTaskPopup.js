import React, { Component } from "react";
import CustomButton from "./CustomButton";

class AddTaskPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: "",
    };
  }
  render() {
    return (
      <div className="transparent-background">
        <div
          className="bg-white shadow-s border-radius-s border-s popup-window column align-items-start"
          style={{ width: 300 }}
        >
          <div className="fs-m fw-b mb-m">Add task</div>
          <input
            type="text"
            className="TextField2"
            onChange={(e) => {
              this.taskTitleChanged(e);
            }}
          />
          <div className="row-reverse mt-m">
            <CustomButton
              title="Save"
              className="bg-blue"
              handler={() => {
                this.props.onTaskSave(this.state.taskTitle);
              }}
            />
            <CustomButton
              title="Cancel"
              className="bg-gray5"
              handler={() => {
                this.props.onCancel();
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  taskTitleChanged = (event) => {
    this.setState({
      taskTitle: event.target.value,
    });
  };
}

export default AddTaskPopup;
