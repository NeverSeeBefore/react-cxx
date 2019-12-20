import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./CSSTransition.css";

function CSSTransitionTest() {
  const [visiable, setVisiable] = useState(true);
  return (
    <div>
      <div>CSSTransition</div>
      <div>
        <CSSTransition classNames="css-t" timeout={2000} in={visiable}>
          {state => {
            console.log("state", state);
            return <div className={state}>content</div>;
          }}
        </CSSTransition>
        <button
          onClick={e => {
            console.log(e, e.target, e.target.value);
            setVisiable(!visiable);
          }}
        >
          set Visiable
        </button>
      </div>
    </div>
  );
}

export default CSSTransitionTest;
