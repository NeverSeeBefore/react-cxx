import React from "react";
import "./App.css";

import ReactDom from "react-dom";

class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        App
        <ChildA></ChildA>
      </div>
    );
  }
}

export default App;

function ChildA(props) {
  return ReactDom.createPortal(
    <div className="child-a">
      ChildA<ChildB></ChildB>
    </div>,
    document.querySelector('.modal')
  );

  return (
    <div className="child-a">
      ChildA
      <ChildB></ChildB>
    </div>
  );
}

function ChildB(props) {
  return <div className="child-b">ChildB</div>;
}
