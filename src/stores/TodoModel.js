import { observable, action } from "mobx";
import { observer } from "mobx-react";
import TodoStore from "./TodoStore";

export default class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;
  @observable hide;

  constructor(store, title, completed, id, hide) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.store = store;
    this.hide = hide;
  }

  @action
  toggle() {
    this.completed = !this.completed;
  }

  @action
  destroy(id) {
    TodoStore.todos.find((currentValue, index) => {
      if (currentValue.id == id) {
        return TodoStore.todos.splice(index, 1);
      }
    });
  }
}