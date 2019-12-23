import React, { useState, useCallback } from "react";
import "./App.css";
// import TransitionTest from "./Transition";
// import CSSTransitionTest from "./CSSTransition";
import Alert from "./components/Alert";
import Test from "./components/FadeTransition/Test";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showButton, setShowButton] = useState(true);
  return (
    <div className="App">
      {/* <TransitionTest></TransitionTest> */}

      {/* <CSSTransitionTest></CSSTransitionTest> */}

      {/* {showButton && (
        <button
          className="alert-button"
          onClick={() => {
            setShowAlert(!showAlert);
          }}
        >
          Control Alert
        </button>
      )}
      <Alert
        show={showAlert}
        title="Animation Alert message"
        msg="This alert message is being transitioned in and out of the DOM."
        beforeEnter={() => {
          setShowButton(false);
        }}
        afterExit={() => {
          setShowButton(true);
        }}
        onClose={() => {
          setShowAlert(false);
        }}
      ></Alert> */}

      <Test></Test>
    </div>
  );
}
export default App;
