import React from "react";
import { removeToDoAction } from "./store";
import { connect } from "react-redux";

function ToDoList(props) {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item}>
          {item}{" "}
          <button
            onClick={() => {
              props.removeTodo(item);
            }}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    list: state.todo.list,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeTodo(word) {
      dispatch(removeToDoAction(word));
    },
  };
}

// 通过connect将仓库的状态绑定到组件属性上
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
