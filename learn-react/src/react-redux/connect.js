import React from "react";
import ctx from "./ctx";

export default function(mapStateToProps, mapDispatchToProps){
  /**
   * 返回一个高阶函数
   */
  return function (Comp){
    class Temp extends React.Component{
      this.context = ctx;
      render(){
        <Comp ></Comp>
      }
    }
    Temp.displayName = Comp.displayName || Comp.name
  }
}