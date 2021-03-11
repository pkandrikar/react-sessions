import React, { Component } from "react";
import CustomButton from "./CustomButton";
import AddTaskPopup from "./AddTaskPopup";
import CheckBox from "./CheckBox";
class TaskHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addButtonTitle: "+ Add Task",
      headerTitle: "My Tasks",
      tasks: [
        this.getTaskObject("Buy Groceries"),
        this.getTaskObject("Fill water"),
        this.getTaskObject("Pay bills"),
        this.getTaskObject("Do coding!"),
      ],
      needAddTaskPopup: false,
    };
  }
  render() {
    return (
      <div
        className="column pt-m pb-m pl-m pr-m"
        style={{ height: 500, width: 400 }}
      >
        <div className="row-reverse ">
          <CustomButton
            className="bg-blue"
            title={this.state.addButtonTitle}
            handler={this.addtaskButtonClicked}
          />
        </div>
        <div className="fw-b fs-m">{this.state.headerTitle}</div>
        {this.renderAllTasks()}
        {this.state.needAddTaskPopup && (
          <AddTaskPopup
            onTaskSave={this.addTask}
            onCancel={() => this.changeVisibilityOfAddTaskPopup(false)}
          />
        )}
      </div>
    );
  }

  getTaskObject(title) {
    return {
      title: title,
      selected: false,
    };
  }

  renderAllTasks() {
    return (
      <div>
        {this.state.tasks.map((obj, index) => {
          return this.getTaskRowDiv(obj, index);
        })}
      </div>
    );
  }

  addTask = (title) => {
    let arr = this.state.tasks;
    arr.push(this.getTaskObject(title));
    this.setState({
      tasks: arr,
    });
    this.changeVisibilityOfAddTaskPopup(false);
  };

  addtaskButtonClicked = () => {
    this.changeVisibilityOfAddTaskPopup(true);
  };

  changeVisibilityOfAddTaskPopup(visibility) {
    this.setState({ needAddTaskPopup: visibility });
  }

  getTaskRowDiv(task, index) {
    return (
      <div className="parent-width fs-r mt-l align-items-start row">
        <CheckBox
          selected={task.selected}
          handler={() => this.checkBoxClicked(index)}
        />
        <div className={task.selected ? "text-line-through text-gray" : ""}>
          {task.title}
        </div>
      </div>
    );
  }
  checkBoxClicked = (index) => {
    let arr = this.state.tasks;
    let task = arr[index];
    task.selected = !task.selected;
    // arr.splice(index, 1, task);
    this.setState({
      tasks: arr,
    });
  };
}

export default TaskHolder;
