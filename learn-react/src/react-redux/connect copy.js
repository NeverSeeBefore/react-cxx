import React, { useContext, useState, useEffect } from "react";
import ctx from "./ctx";
import { bindActionCreators } from "redux";

// 函数组件方式实现connect
export default function(mapStateToProps, mapDispatchToProps) {
  /**
   * 返回一个高阶函数
   */

  return function(Comp) {
    function Temp(props) {
      const store = useContext(ctx);
      const [state, setState] = useState(
        mapStateToProps && mapStateToProps(store.getState())
      );

      useEffect(() => {
        let unListen = store.subscribe(() => {
          const newState = mapStateToProps && mapStateToProps(store.getState());
          // if (!compare(state, newState)) {
          setState(prevState => {
            if (compare(prevState, newState)) {
              return prevState;
            } else {
              return newState;
            }
          });
        });
        // 返回值为取消监听函数，会在组件销毁的时候运行
        return unListen;
      }, [store]);
      let handlers = {};
      if (mapDispatchToProps) {
        handlers = getEventHandlers(mapDispatchToProps);
      }

      return <Comp {...state} {...handlers} {...props} />;
    }
    Temp.displayName = Comp.displayName || Comp.name;
    return Temp;
  };
}

/**
 * 得到需要传递的事件处理属性
 */
function getEventHandlers(mapDispatchToProps) {
  if (typeof mapDispatchToProps === "function") {
    return mapDispatchToProps(this.store.dispatch);
  } else if (typeof mapDispatchToProps === "object") {
    return bindActionCreators(mapDispatchToProps, this.store.dispatch);
  }
}
/**
 *
 */
function compare(obj1, obj2) {
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
}
