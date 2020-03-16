import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";

@observer
class TodoEntry extends Component {
  state = {
    value: ""
  };
  render() {
    let { todos } = todoStore;
    return (
      <header className="header">
        <h1>ToDo</h1>
        <input
          value={this.state.value}
          onChange={event => {
            this.setState({
              value: event.target.value
            });
          }}
          onKeyDown={event => {
            if (event.keyCode !== 13) {
              return;
            }
            event.preventDefault();
            todoStore.addTodo(this.state.value);
            this.setState({
              value: ""
            });
          }}
          type="text"
          className="new-todo"
          placeholder="What need to done?"
        />
      </header>
    );
  }
}

export default TodoEntry;
