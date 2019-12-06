import React from "react";
import "./App.css";

class App extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    // console.log(
    //   <div>
    //     <p>
    //       <ul>
    //         <li>1</li>
    //         <li>2</li>
    //         <li>3</li>
    //       </ul>
    //     </p>
    //   </div>
    // );
    return (
      <div className="App">
        abc {null} {undefined}
        {["arr1", <div>arr2</div>, "arr3"]}
        <div></div>
      </div>
    );
  }
}

export default App;
