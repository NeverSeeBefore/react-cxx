import React, { Component } from 'react';
import FunDefault from './components/FunDefault.js';
import ClassDefault from './components/ClassDefault.js';
import ValidationComp from './components/ValidationComp.js';

class App extends Component {

  render () {
    return (
      <div>
        <FunDefault a="100" b="202"></FunDefault>
        <ClassDefault a='app' c="bbbbb"></ClassDefault>
        <ValidationComp b={"2"} c l={{a: 1,b: 100,c: 'ccc'}}></ValidationComp>
      </div>
    )
  }

}

export default App;