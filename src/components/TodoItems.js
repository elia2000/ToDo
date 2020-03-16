import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import { action, observable } from "mobx";

@observer
class TodoItems extends Component {
  todos = TodoStore.todos;
  @observable todos;

  @action
  rendder(todo) {
    return [
      <li>
        <TodoItem todo={todo} />
      </li>
    ];
    // }
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.todos.map(todo => {
            return this.rendder(todo);
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;