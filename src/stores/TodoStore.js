import { observable, action } from "mobx";
import { observer } from "mobx-react";
import TodoModel from "./TodoModel";

// @observer
class TodoStore {
  @observable todos = [];
  @observable id;
  @observable lastID = 0;
  @observable itemleft = 0;

  // setInterval(() => {
  //   todos.map(()=>{
  //     if (todo.completed == true) {
  //       console.log(this.itemleft++)
  //   }
  //   });
  // }, 100);

  @action
  addTodo(title) {
    this.todos.push(
      new TodoModel(this, title, false, this.lastID++, false, false)
    );
  }
}
const store = new TodoStore();
export default store;

// ************************PLAN 2************************
// constructor() {}

// delTodo(id) {
//   this.todos.filter(value => {
//     if (this.todos[key].arrayStore[0] === id) {
//       this.todos.splice(key - 1, 1);
//     } else {
//       console.log(
//         "can't find the id!/nid is: ",
//         id,
//         "/nand now key is: ",
//         key
//       );
//     }
//   });
// console.log("hi");
// console.log(this.todos.length);
// debugger;
// this.todos.length > 1 ? this.todos.splice(id - 1, 1) : this.todos.splice(0);
// }
