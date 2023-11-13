import React, { useState } from "react";
import { addToDoAction } from "./store";
import { connect } from "react-redux";

function ToDoInput(props) {
  const [word, setWord] = useState("");
  return (
    <div>
      <input
        type="text"
        value={word}
        onInput={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (word) {
            props.addTodo(word);
            setWord("");
          }
        }}
      >
        add
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo(word) {
      dispatch(addToDoAction(word));
    },
  };
}

export default connect(null, mapDispatchToProps)(ToDoInput);
