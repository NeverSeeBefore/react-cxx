# Protals

插槽： 将一个 React 元素渲染到指定的 DOM 容器中

ReactDom.createProtal(React 元素， 真实 DOM 容器)， 返回的是 React 元素

ReactDom.createPortal(
<div className="child-a">
ChildA<ChildB></ChildB>
</div>,
document.querySelector('.modal'))

**注意事件冒泡**

1. react 中的事件是包装过的
2. 它的事件冒泡的根据虚拟 dom 树来冒泡的
