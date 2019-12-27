import React from "react";
import { Route } from "react-router-dom";
import routeConfig from "./routeConfig";

export default function RootRouter(props) {
  return <>{getRoute(routeConfig)}</>;
}

function getRoute(routes) {
  if (!Array.isArray(routes)) {
    return null;
  }
  return routes.map((it, index) => {
    const { children, component: Component, ...res } = it;
    return (
      <Route
        {...res}
        key={index}
        render={values => {
          return (
            <Component {...values} children={children}>
              {getRoute(it.children)}
            </Component>
          );
        }}
      ></Route>
    );
  });
}
