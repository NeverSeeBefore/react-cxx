import React from "react";
import ToDoSearch from "./toDoInput";
import ToDoList from "./toDoList";
import { store } from "./store";
import { Provider } from "react-redux";

export default function ReduxToDo() {
  return (
    <Provider store={store}>
      <div className="comp-box">
        <h1>TODO_A</h1>
        <p>
          1. 通过createstore生成仓库 <br />
          2. 通过Provider组件将store设置到上下文对象中 <br />
          3.通过connect高阶组件将仓库状态与组件进行关联
        </p>
        <ToDoSearch />
        <ToDoList />
      </div>
    </Provider>
  );
}
