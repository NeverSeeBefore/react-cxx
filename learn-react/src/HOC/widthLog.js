import React from 'react';

export default function WidthLog (Comp) {

  class LogWrapper extends React.Component {
    componentDidMount(){
      console.log(`组件${Comp.name}被创建了${Date.now()}`)
    }

    render() {
      // this.props 正常的舒总
      // forwardRef 代表要转发的ref
      const {forwardRef, ...rest} = this.props;
      return <Comp ref={forwardRef} {...rest} ></Comp>
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogWrapper {...props} forwardRef={ref}></LogWrapper>
  })

}

