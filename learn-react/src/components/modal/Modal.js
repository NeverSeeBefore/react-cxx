import React from 'react';
import "./style.css";

export default function Modal (props) {
  console.log(props.isLoading);
  if(!props.isLoading){
    return null;
  }
  return (
      <div className="modal"><span className="tip">加载中。。。</span></div>
    )

}

