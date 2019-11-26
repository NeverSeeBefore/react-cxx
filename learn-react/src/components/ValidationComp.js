import React, { Component } from "react";
import PropTypes from "prop-types";

class ValidationComp extends Component {
  static defaultProps = {
    //默认属性
    a: "aaaaa",
    d: function() {}
  };

  static propTypes = {
    //属性验证
    a: PropTypes.number,
    b: PropTypes.string.isRequired, // 必须传递这个属性
    c: PropTypes.bool,
    d: PropTypes.func.isRequired, // 有默认值时，并且符合规则，就不会报错了
    children: PropTypes.element, // 必须树react元素
    f: PropTypes.elementType, // 必须时一个元素类型（函数本身或者构造函数本身）(可以用来传组件)
    j: PropTypes.shape({
      // 属性必须满足该对象的要求,可以有更多的属性，但要求的必须要有
      name: PropTypes.string,
      age: PropTypes.number
    }),
    k: PropTypes.exact({}), //同shape, 但是不允许多属性，要完全与要求相同
    l: function(props, propName, componentName) {
      const val = props[propName];
      console.log(props, propName, componentName, typeof val);
      if (val === undefined || val === null) {
        return new Error(`${propName} is undefined or null`);
      }
      if (typeof val === "number") {
        return new Error(`${propName} is not a number`);
      }
      // return  PropTypes.checkPropTypes(props, propName, componentName); // wrong
    }
  };

  render() {
    console.log("PropTypes: ", PropTypes);
    return <div>a:{this.props.a}</div>;
  }
}

export default ValidationComp;
