import React, { Component } from 'react';
import { Comp1 } from './Comp1';
import { Comp2 } from './Comp2';
import ErrorBound from './ErrorBound';

class Test extends Component {

  render () {
    return (
      <div>
        <ErrorBound>
          <Comp1 list='abc'></Comp1>
        </ErrorBound>
        <ErrorBound>
          <Comp2 list={['a', 'b', 'c']}></Comp2>
        </ErrorBound>
      </div>
    )
  }

}

export default Test;