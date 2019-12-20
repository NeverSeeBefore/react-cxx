import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./Transition.css";

const duration = 2000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {/* {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )} */}
    {state => {
      console.log(state);
      return (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          I'm a fade Transition!
        </div>
      );
    }}
  </Transition>
);

function TransitionTest() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Transition
        addEndListener={(node, done) => {
          console.log(node, done);
          node.addEventListener('transitionend', () => {
            console.log('过渡结束')
          },{once: true})
        }}
        in={inProp}
        timeout={duration}
      >
        {state => {
          console.log(state);
          return (
            <div
              // style={{
              //   ...defaultStyle,
              //   ...transitionStyles[state]
              // }}

              className={state}
            >
              I'm a fade Transition!
            </div>
          );
        }}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>Click to Toggle</button>
    </div>
  );
}
export default TransitionTest;
