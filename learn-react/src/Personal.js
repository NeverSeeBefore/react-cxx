import React from "react";
import loginInfo from "./loginInfo";

export default function Personal(props) {
  return (
    <div>
      <div>个人中心</div>
      <div>看来授权成功了</div>
        <a
          href='/'
          onClick={() => {
            loginInfo.loginOut();
          }}
        >
          退出
        </a>
    </div>
  );
}
