import React, { useState, useRef, useImperativeHandle } from "react";
import "./App.css";

function App() {
  const [, forceUpdate] = useState({});
  const testRef = useRef();
  return (
    <div>
      {/* <Test ref={testRef}></Test>
      <button
        onClick={() => {
          console.log("调用Test组件的方法");
          testRef.current.method();
        }}
      >
        abc
      </button> */}

      {/* <TestforwardRef ref={testRef}></TestforwardRef>
      <button
        onClick={() => {
          console.log("testRef", testRef);
          // testRef.current.method();
        }}
      >
        abc
      </button> */}

      <TestforwardRefAndUseImperativeHandle
        ref={testRef}
      ></TestforwardRefAndUseImperativeHandle>
      <button
        onClick={() => {
          console.log(
            "调用TestforwardRefAndUseImperativeHandle组件的方法",
            testRef
          );
          testRef.current.method();
          forceUpdate({});
        }}
      >
        abc
      </button>
    </div>
  );
}

export default App;

// calssComponent
// class Test extends React.PureComponent {
//   method() {
//     console.log("TestMethodCalled");
//   }
//   render() {
//     return <div>TestComp</div>;
//   }
// }

// React.forwardRef(Comp)
// function Test(props, ref) {
//   return <div ref={ref}>TestComp</div>;
// }
// const TestforwardRef = React.forwardRef(Test);

// useImperativeHandle
function TestUseImperativeHandle(props, ref) {
  useImperativeHandle(
    ref,
    () => {
      console.log("useImperativeHandle run");
      return {
        method: function() {
          console.log("useImperativeHandle methods");
        }
      };
    },
    []
  );

  return <div>Test useImperativeHandle</div>;
}
const TestforwardRefAndUseImperativeHandle = React.forwardRef(
  TestUseImperativeHandle
);
