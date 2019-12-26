import React, { Component } from "react";
import "./style.css";
/**
 * 分页组件
 * total: props.total || 0,    // 总数据量
 * current: props.current || 1,// 当前页
 * limit: props.limit || 10,    // 页大小
 * panelNumber: props.panelNumber || 5, // 页码最多显示多少的
 * onChangePage(target) 跳转目标页函数
 */
export default function Paging(props) {
  const pageNumber = getPageNumber(props.total, props.limit);

  const numberScope = getNumberScope(pageNumber, props);
  const numbers = [];
  for(let i = numberScope.min; i <= numberScope.max; i ++){
    numbers.push(<span key={i} onClick={() => {toPage(i, props)}} className={i === props.current ? "active item" : "item"}>{i}</span>);
  }

  return (
    <div>
      
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => {
          toPage(1, props);
        }}
      >
        首页
      </span>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => {
          props.current - 1 < 1
            ? toPage(1, props)
            : toPage(props.current - 1, props);
        }}
      >
        上一页
      </span>
      
      {
        numbers
      }


      <span
        className={props.current === pageNumber ? "item disabled" : "item"}
        onClick={() => {
          props.current + 1 > pageNumber
            ? toPage(pageNumber, props)
            : toPage(props.current + 1, props);
        }}
      >
        下一页
      </span>
      <span
        className={props.current === pageNumber ? "item disabled" : "item"}
        onClick={() => {
          toPage(pageNumber, props);
        }}
      >
        尾页
      </span>
      <span className="current">{props.current}</span>/<span>{pageNumber}</span>
    </div>
  );
}
// 获取总页数
function getPageNumber(total, limit) {
  return Math.ceil(total / limit);
}

// 跳转页面
function toPage(target, props) {
  if (props.current === target) return;
  props.onChangePage && props.onChangePage(target);
}
// 计算页号范围
function getNumberScope (pageNumber, {current, panelNumber}) {
  const mid = Math.ceil(panelNumber / 2)
  // console.log('mid: ', mid);
  if(pageNumber <= panelNumber){ // 总页数 小于 要显示的个数 
    return {
      min: 1,
      max: pageNumber
    }
  }
  if(current - mid + 1<= 0){       // 左边界
    return {
      min: 1,
      max: panelNumber
    }
  }
  if(current - mid + panelNumber >= pageNumber){       // 右边界
    return {
      min: pageNumber - panelNumber + 1,
      max: pageNumber
    }
  }
  return {                          // 正常情况
    min: current - mid + 1,
    max: current - mid + panelNumber
  }
}