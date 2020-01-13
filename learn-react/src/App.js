import React from "react";
import "./App.scss";
import "./util/util";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";
class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter></Counter>
        </div>
      </Provider>
    );
  }
}

export default App;
