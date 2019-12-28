import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

export default function TransitionRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest}>
      {({match}) => {
        return (
          <CSSTransition
            in={match ? true : false}
            timeout={800}
            classNames={{
              enter: "animated fast",
              enterActive: "fadeInRight",
              exit: "animated fast",
              exitActive: "fadeOutLeft"
            }}
            mountOnEnter
            unmountOnExit
          >
            <Component></Component>
          </CSSTransition>
        );
      }}
    </Route>
  );
}
