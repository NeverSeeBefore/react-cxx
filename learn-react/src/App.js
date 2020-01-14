import React from "react";
import "./App.scss";
import "./util/util";
import { Provider } from "react-redux";
import store from "./store";
import Test from "./components/Layout/Test";
import StudentSearch from "./components/Layout/components/StudentSearch"

class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Test></Test>
        </div>
      </Provider>
    );
  }
}

export default App;
