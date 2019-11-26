import React from "react";
import "./index.css";

export default function Modal(props) {
  var defaultProps = {
    bg: "rgba(0, 0, 0, .5)",
    children: "center"
  };
  var datas = Object.assign({}, defaultProps, props);
  // console.log("Modal", props);
  return (
    <div
      className="modal"
      style={{
        background: datas.bg
      }}
      onClick={e => {
        if (e.target.className === "modal") {
          props.clickShadow();
        }
      }}
    >
      <div className="modal-center">{datas.children}</div>
    </div>
  );
}
