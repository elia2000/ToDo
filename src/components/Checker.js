import { observable, action } from "mobx";
import TodoStore from "../stores/TodoStore";

class Checker {
  @observable todoLength;
  @observable itemleft = 0;
  constructor() {
    this.todoLength = TodoStore.todos.length;
    this.inter = setInterval(() => {
      this.todoLength = TodoStore.todos.length;
      this.itemleft = 0;
      TodoStore.todos.map(todo => {
        if (todo.completed == false) {
          this.itemleft = this.itemleft + 1;
        }
      });
    }, 1);
  }
  
}

const checker = new Checker();
export default checker;
