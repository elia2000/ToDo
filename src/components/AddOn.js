import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";
import checker from "./Checker";
import { observer } from "mobx-react";
import { action } from "mobx";

@observer
class AddOn extends Component {
  render() {
    function click(event) {
      // apperiance
      document.getElementById("1").className = "";
      document.getElementById("2").className = "";
      document.getElementById("3").className = "";
      event.target.className = "selected";
      // action
      // ****** All
      console.log(event.target.innerHTML);
      if (event.target.innerHTML == "All") {
        TodoStore.todos.map(todo => {
          todo.hide = false;
        });
        // ****** Active
      } else if (event.target.innerHTML == "Active") {
        TodoStore.todos.map(todo => {
          if (todo.completed == false) {
            todo.hide = false;
          } else {
            todo.hide = true;
          }
          console.log(todo.hide);
        });
        // ****** Complete
      } else if (event.target.innerHTML == "Complete") {
        TodoStore.todos.map(todo => {
          if (todo.completed == true) {
            todo.hide = false;
          } else {
            todo.hide = true;
          }
        });
      }
    }

    function destroyAddOn() {
      for (let i = 0; i < TodoStore.todos.length; i++) {
        TodoStore.todos.map((todo, index) => {
          if (todo.completed == true) {
            TodoStore.todos.splice(index, 1);
          }
        });
      }
    }

    return [
      <footer className="footer">
        <div className="todo-count">{`${checker.itemleft} items left`}</div>
        <div className="filters">
          <li>
            <a href="#" className="selected" id="1" onClick={click}>
              All
            </a>
          </li>
          <li>
            <a href="#" className="" id="2" onClick={click}>
              Active
            </a>
          </li>
          <li>
            <a href="#" className="" id="3" onClick={click}>
              Complete
            </a>
          </li>
        </div>
        <div className="clear-completed" onClick={destroyAddOn}>
          Clear Complete
        </div>
        <div className="info">
          <a href="https://github.com/elia2000">My Info</a>
        </div>
      </footer>
    ];
  }
}

export default AddOn;
