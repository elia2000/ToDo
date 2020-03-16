import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import TodoStore from "../stores/TodoStore";
import TodoModel from "../stores/TodoModel";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };

  @action
  onDestroy = todo => {
    this.props.todo.destroy(todo.id);
  };

  render() {
    this.todo = this.props.todo;
    if (this.todo.hide == false) {
      return (
        <li className={this.todo.completed ? "completed" : " "}>
          <div className="view">
            <input
              onClick={this.onToggle}
              type="checkbox"
              className="toggle"
              value="on"
              checked={this.todo.completed}
            />
            <label>{this.todo.title}</label>
            <button
              className="destroy"
              onClick={event => {
                this.onDestroy(this.todo);
              }}
            ></button>
          </div>
        </li>
      );
    } else {
      return <li></li>;
    }
  }
}

export default TodoItem;
