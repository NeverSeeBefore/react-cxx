import React from "react";
import "./App.css";
// import { BrowserRouter, Route } from "react-router-dom";
import { BrowserRouter, Route} from "./react-router";
import Link from "./react-router-dom/Link";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/news">
        <Route path="/" component={ChangePage}></Route>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
      </BrowserRouter>
    );
  }
}

export default App;

function Page1() {
  return <div>page1</div>;
}
function Page2() {
  return <div>page2</div>;
}

function ChangePage(props) {
  console.log(props)
  return (
    <div>
      <button
        onClick={() => {
          props.history.push("/page1")
        }}
      >
        page1
      </button>
      <button
        onClick={() => {
          props.history.push("/page2")
        }}
      >
        page2
      </button>
    </div>
  );
}
