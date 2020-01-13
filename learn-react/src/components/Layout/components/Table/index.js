import React from "react";
import "./index.css";

export default function Table(props) {
  // console.log(props);
  const head = ["id", "name", "sex", "birth", "phone", "address", "email"].map(
    (it, index) => {
      // console.log(it, index);
      return <th key={it + "-" + index}>{it}</th>;
    }
  );
  const body = props.datas.map((it, index) => {
    const temp = [];
    // console.log(it);
    for (let k in it) {
      // console.log(it[k]);
      temp.push(<td key={it.name + "-" + k}>{it[k]}</td>);
    }
    return <tr key={it.name + "-" + it.id}>{temp}</tr>;
  });
  return (
    <table className="table">
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}
