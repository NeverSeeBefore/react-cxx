import React from "react";

export default function FunDefault(props) {
  return (
    <div>
      a: {props.a},b: {props.b},c: {props.c}
    </div>
  );
}
// 属性默认值
FunDefault.defaultProps = {
  a: 1,
  c: 3
};
