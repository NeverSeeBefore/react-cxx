import React from "react";
import ReduxTodoA from "./ReduxToDoA";
import ReduxTodoB from "./ReduxToDoB";
import ReduxTodoC from "./ReduxToDoC";

export default function ReduxToDo({ mode }) {
  return (
    <>
      {mode === "A" && <ReduxTodoA></ReduxTodoA>}
      {mode === "B" && <ReduxTodoB></ReduxTodoB>}
      {mode === "C" && <ReduxTodoC></ReduxTodoC>}
    </>
  );
}
