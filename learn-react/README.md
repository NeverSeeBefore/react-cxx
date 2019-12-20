# React 动画

React动画库： react-transition-group      react-motion

## CSSTransition

当进入时，发生：
1. 为CSSTransition内部的DOM根元添加样式*enter*
2. 在下一帧（*enter*样式完全应用到了元素）， 立即为该元素添加样式*enter-active*
3. 当timeout结束，去掉之前的样式，添加样式*enter-done*

当推出时，发生：
1. 为CSSTransition内部的DOM根元添加样式*exit*
2. 在下一帧（*exit*样式完全应用到了元素）， 立即为该元素添加样式*exit-active*
3. 当timeout结束，去掉之前的样式，添加样式*exit-done*

