import logo from "./logo.svg";
import "./App.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import CompCommon from "./withMouseMove";
import { createPortal } from "react-dom";
import MouseMove from "./MouseMove";
import withMouseMove from "./withMouseMove";

const Comp1MouseMove = withMouseMove(Comp1);
const Comp2MouseMove = withMouseMove(Comp2);

function App() {
  return (
    <>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <div>HOC</div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Comp1MouseMove></Comp1MouseMove>
        <Comp2MouseMove></Comp2MouseMove>
      </div>
      <div>RenderProp</div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MouseMove render={props => <Comp1 {...props}></Comp1>}></MouseMove>
        <MouseMove render={props => <Comp2 {...props}></Comp2>}></MouseMove>
      </div>
    </>
  );
}

export default App;
