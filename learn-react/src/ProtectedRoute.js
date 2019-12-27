import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginInfo from "./loginInfo";

export default function ProtectedRoute({
  component: Component,
  children,
  render,
  ...props
}) {
  return (
    <Route
      {...props}
      render={values => {
        console.log("ProtectedRoute", values);
        if (loginInfo.isLogin) {
          return <Component></Component>;
        } else {
          return (
            // <Redirect
            //   to={{
            //     pathname: "/login",
            //     search: "?returnurl=" + values.location.pathname
            //   }}
            // ></Redirect>
            <Redirect
              to={{
                pathname: "/login",
                state: values.location.pathname
              }}
            ></Redirect>
          );
        }
      }}
    ></Route>
  );
}
