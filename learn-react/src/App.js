import React, { useState, useCallback } from "react";
import "./App.css";
// import TransitionTest from "./Transition";
// import CSSTransitionTest from "./CSSTransition";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [showButton, setShowButton] = useState(true);
  return (
    
    <div className="App">
      {/* <TransitionTest></TransitionTest> */}
      {/* <hr style={{ width: "100%" }}></hr> */}
      {/* <CSSTransitionTest></CSSTransitionTest> */}
      {/* <hr style={{ width: "100%" }}></hr> */}


      {showButton && <button
        className="alert-button"
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        Control Alert
      </button>}
      <Alert show={showAlert} beforeEnter={() => {setShowButton(false)}} afterExit={() => {setShowButton(true)}} onClose={() => {setShowAlert(false)}}></Alert>

      
    </div>
  );
}
export default App;
