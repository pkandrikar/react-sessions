import React, { Component } from "react";
import CustomButton from "./CustomButton";
class TaskHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addButtonTitle: "+ Add Task",
      headerTitle: "My Tasks",
      tasks: ["Buy Groceries", "Fill water", "Pay bills", "Do coding!"],
    };
  }
  render() {
    return (
      <div
        className="column bg-white shadow-m border-radius-s border-m pt-m pb-m pl-m pr-m"
        style={{ height: 500, width: 400 }}
      >
        <div className="row-reverse ">
          <CustomButton
            title={this.state.addButtonTitle}
            handler={this.addtaskButtonClicked}
          />
        </div>
        <div className="fw-b fs-m">{this.state.headerTitle}</div>
        {this.renderAllTasks()}
      </div>
    );
  }

  renderAllTasks() {
    return (
      <div>
        {this.state.tasks.map((obj) => {
          return this.getTaskRowDiv(obj);
        })}
      </div>
    );
  }

  addtaskButtonClicked = () => {
    let arr = this.state.tasks;
    arr.push("New tasks " + this.state.tasks.length);
    this.setState({
      tasks: arr,
    });
  };

  getTaskRowDiv(title) {
    return (
      <div className="parent-width fs-r mt-l align-items-start row">
        {this.getCheckBoxDiv()}
        {title}
      </div>
    );
  }

  getCheckBoxDiv() {
    return (
      <div
        className="border-m border-radius-s bg-gray1 mr-s"
        style={{ padding: 8 }}
      ></div>
    );
  }
}

export default TaskHolder;
