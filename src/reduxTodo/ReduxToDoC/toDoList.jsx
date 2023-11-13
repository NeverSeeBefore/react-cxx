import React from "react";
import { removeToDoAction } from "./store";
import { useDispatch, useSelector } from "react-redux";

function ToDoList(props) {
  const { list } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>
          {item}{" "}
          <button
            onClick={() => {
              dispatch(removeToDoAction(item));
            }}
          >
            remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;