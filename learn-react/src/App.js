import React, { useState } from "react";
import "./App.css";
import useReducer from "./components/myHook/useReducer";

/**
 * 根据当前的数据， 生成一个新的数据
 * @param {*} state
 * @param {*} action
 */
function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      if (state === 0) {
        return 0;
      }
      return state - 1;
    default:
      return state;
  }
}

// function App() {
//   const [n, setN] = useState(0);

//   function dispatch(action) {
//     const newN = reducer(n, action);
//     setN(newN);
//   }
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           dispatch({ type: "increase" });
//         }}
//       >
//         ++++++
//       </button>
//       <span>{n}</span>
//       <button
//         onClick={() => {
//           dispatch({ type: "decrease" });
//         }}
//       >
//         --------
//       </button>
//     </div>
//   );
// }

function App() {
  const [n, dispatchN] = useReducer(reducer, 0);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatchN({ type: "increase" });
        }}
      >
        ++++++
      </button>
      <span>{n}</span>
      <button
        onClick={() => {
          dispatchN({ type: "decrease" });
        }}
      >
        --------
      </button>
    </div>
  );
}
export default App;
