import React, { useState } from "react";
import { addToDoAction } from "./store";
import { useDispatch } from "react-redux";

function ToDoInput() {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
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
            dispatch(addToDoAction(word));
            setWord("");
          }
        }}
      >
        add
      </button>
    </div>
  );
}
export default ToDoInput;
