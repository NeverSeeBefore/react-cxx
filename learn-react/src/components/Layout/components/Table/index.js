import React from "react";
import "./index.css";

export default function Table(props) {
  // console.log(props);
  const head = props.head.map((it, index) => {
    // console.log(it);
    return <th key={index}>{it}</th>;
  });
  const body = props.datas.map((it, index) => {
    const temp = [];
    // console.log(it);
    for (let k in it) {
      // console.log(it[k]);
      temp.push(<td>{it[k]}</td>);
    }
    return <tr key={index}>{temp}</tr>;
  });
  return (
    <table className="table">
      <thead><tr>{head}</tr></thead>
      <tbody>{body}</tbody>
    </table>
  );
}
