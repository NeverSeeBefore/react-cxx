import React from "react";
import ctx from "./ctx";
import { bindActionCreators } from "redux";

// 类组件方式实现connect
export default function(mapStateToProps, mapDispatchToProps) {
  /**
   * 返回一个高阶函数
   */
  return function(Comp) {
    class Temp extends React.PureComponent {
      static contextType = ctx;
      constructor(props, context) {
        super(props, context);
        this.store = context;
        if (mapStateToProps) {
          // 状态中的数据
          this.state = mapStateToProps(this.store.getState());
          // 监听仓库中的数据变化
          this.unListen = this.store.subscribe(() => {
            this.setState(mapStateToProps(this.store.getState()));
          });
        }
        if (mapDispatchToProps) {
          // 可能是函数，可能是对象
          this.handlers = this.getEventHandlers(mapDispatchToProps);
        }
      }
      /**
       * 得到需要传递的事件处理属性
       */
      getEventHandlers(mapDispatchToProps) {
        if (typeof mapDispatchToProps === "function") {
          return mapDispatchToProps(this.store.dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          return bindActionCreators(mapDispatchToProps, this.store.dispatch);
        }
      }
      componentWillUnmount() {
        // 组件卸载时取消监听
        this.unListen && this.unListen();
      }
      render() {
        return <Comp {...this.state} {...this.handlers} {...this.props} />;
      }
    }
    Temp.displayName = Comp.displayName || Comp.name;
    return Temp;
  };
}
