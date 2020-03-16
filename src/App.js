import React, { Component } from "react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import checker from "./components/Checker";
import AddOn from "./components/AddOn";
import { observer } from "mobx-react";
import "./App.css";

@observer
class App extends Component {

  render() {
    if (checker.todoLength != 0) {
      return (
        <div id="todoapp" className="todoapp">
          <TodoEntry />
          <TodoItems />
          <AddOn />
        </div>
      );
    } else {
      return (
        <div id="todoapp" className="todoapp">
          <TodoEntry />
          <TodoItems />
        </div>
      );
    }
  }
}

export default App;
