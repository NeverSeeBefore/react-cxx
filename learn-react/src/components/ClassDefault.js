import React, { Component } from 'react';

class ClassDefault extends Component {

  static defaultProps = {
    a: 'sattic',
    b: 'bclstaticass',
    c: 'static'
  }

  render () {
    return (
      <div>
        a: {this.props.a};
        b: {this.props.b};
        c: {this.props.c};
      </div>
    )
  }

}
// ClassDefault.defaultProps = {
//   a: 'classa',
//   b: 'bclass',
//   c: 'clacss'
// }
export default ClassDefault;