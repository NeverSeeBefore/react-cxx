import React, { useContext } from "react";
import "./App.css";
import useReducer from "./components/myHook/useReducer";

function App() {
  return (
    <div>
      <CompCtx></CompCtx>
    </div>
  );
}

export default App;

const ctx = React.createContext();

function CompCtx() {
  return (
    <div>
      <ctx.Provider value={{ a: 123 }}>
        Consumer
        <ChildCtx></ChildCtx>
        HOOK
        <ChildCtxHook></ChildCtxHook>
      </ctx.Provider>
    </div>
  );
}

// Consumer///////////////
function ChildCtx() {
  return (
    <h1>
      上下文中的a:
      <ctx.Consumer>
        {context => {
          return context.a;
        }}
      </ctx.Consumer>
    </h1>
  );
}

// HOOK///////////////
function ChildCtxHook(){
  const context = useContext(ctx);
  return (
    <h1>
      上下文中的a:{context.a}
    </h1>
  );
}
