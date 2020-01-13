import React from "react";
import { connect } from "react-redux";
import store from "../store";
import {
  increase,
  asyncIncrease,
  decrease,
  asyncDecrease
} from "../store/action/counter";
// 展示组件
function Counter(props) {
  return (
    <div>
      <div>{props.number}</div>
      <p>
        <button style={{ width: 80 }} onClick={props.onAsyncDecrease}>
          async-
        </button>
        <button style={{ width: 80 }} onClick={props.onDecrease}>
          -
        </button>
        <button style={{ width: 80 }} onClick={props.onIncrease}>
          +
        </button>
        <button style={{ width: 80 }} onClick={props.onAsyncIncrease}>
          async+
        </button>
      </p>
    </div>
  );
}

/**
 * 容器组件
 */
// export default class CounterContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = mapState2Props(store.getState());
//     store.subscribe(() => {
//       this.setState(mapState2Props(store.getState()))
//     })
//   }
//   render() {
//     const eventHandlers = mapDispatch2Props(store.dispatch);
//     return <Counter {...this.state} {...eventHandlers} />;
//   }
// }

// 映射数据
function mapState2Props(state) {
  console.log(state.counter);
  return {
    number: state.counter
  };
}
// 映射处理函数
function mapDispatch2Props(dispatch) {
  return {
    onIncrease: () => {
      dispatch(increase());
    },
    onDecrease: () => {
      dispatch(decrease());
    },
    onAsyncIncrease: () => {
      dispatch(asyncIncrease());
    },
    onAsyncDecrease: () => {
      dispatch(asyncDecrease());
    }
  };
}

export default connect(mapState2Props, mapDispatch2Props)(Counter);
// const hoc = connect(mapState2Props, mapDispatch2Props) 会返回高阶组件
// hoc(Counter) 会返回Counter的容器组件，展示Counter
