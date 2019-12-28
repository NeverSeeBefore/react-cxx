import React from "react";
import "./App.css";
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom";
import withScrollTop from "./HOC/withScrollTop";

const Page1WithScrollTop = withScrollTop(Page1);
const Page2WithScrollTop = withScrollTop(Page2);

class App extends React.Component {
  render() {
    return <BrowserRouter>
      <div className="nav">
        <NavLink to="/page1">page1</NavLink>
        <NavLink to="/page2">page2</NavLink>
      </div>
      {/* <Route path="/page1" component={Page1}></Route>
      <Route path="/page2" component={Page2}></Route> */}
      
      <Route path="/page1" component={Page1WithScrollTop}></Route>
      <Route path="/page2" component={Page2WithScrollTop}></Route>
    </BrowserRouter>;
  }
}

export default App;

function Page1(Props) {
  return (
    <div className="page page1">{`CSSTransition
A transition component inspired by the excellent ng-animate library, you should use it if you're using CSS transitions or animations. It's built upon the Transition component, so it inherits all of its props.

CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. The first class is applied and then a second *-active class in order to activate the CSS transition. After the transition, matching *-done class names are applied to persist the transition state.

function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}
When the in prop is set to true, the child component will first receive the class example-enter, then the example-enter-active will be added in the next tick. CSSTransition forces a reflow between before adding the example-enter-active. This is an important trick because it allows us to transition between example-enter and example-enter-active even though they were added immediately one after another. Most notably, this is what makes it possible for us to animate appearance.

.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
*-active classes represent which styles you want to animate to.

Note: If you're using the appear prop, make sure to define styles for .appear-* classes as well.

Example

Props Accepts all props from <Transition> unless otherwise noted.
classNames
The animation classNames applied to the component as it appears, enters, exits or has finished the transition. A single name can be provided and it will be suffixed for each stage: e.g.

classNames="fade" applies fade-appear, fade-appear-active, fade-appear-done, fade-enter, fade-enter-active, fade-enter-done, fade-exit, fade-exit-active, and fade-exit-done.

Note: fade-appear-done and fade-enter-done will both be applied. This allows you to define different behavior for when appearing is done and when regular entering is done, using selectors like .fade-enter-done:not(.fade-appear-done). For example, you could apply an epic entrance animation when element first appears in the DOM using Animate.css. Otherwise you can simply use fade-enter-done for defining both cases.

Each individual classNames can also be specified independently like:

classNames={{
 appear: 'my-appear',
 appearActive: 'my-active-appear',
 appearDone: 'my-done-appear',
 enter: 'my-enter',
 enterActive: 'my-active-enter',
 enterDone: 'my-done-enter',
 exit: 'my-exit',
 exitActive: 'my-active-exit',
 exitDone: 'my-done-exit',
}}
If you want to set these classes using CSS Modules:

import styles from './styles.css';
you might want to use camelCase in your CSS file, that way could simply spread them instead of listing them one by one:

classNames={{ ...styles }}
type: string | { appear?: string, appearActive?: string, appearDone?: string, enter?: string, enterActive?: string, enterDone?: string, exit?: string, exitActive?: string, exitDone?: string, }
default: ''
onEnter
A <Transition> callback fired immediately after the 'enter' or 'appear' class is applied.

type: Function(node: HtmlElement, isAppearing: bool)
onEntering
A <Transition> callback fired immediately after the 'enter-active' or 'appear-active' class is applied.

type: Function(node: HtmlElement, isAppearing: bool)
onEntered
A <Transition> callback fired immediately after the 'enter' or 'appear' classes are removed and the done class is added to the DOM node.

type: Function(node: HtmlElement, isAppearing: bool)
onExit
A <Transition> callback fired immediately after the 'exit' class is applied.

type: Function(node: HtmlElement)
onExiting
A <Transition> callback fired immediately after the 'exit-active' is applied.

type: Function(node: HtmlElement)
onExited
A <Transition> callback fired immediately after the 'exit' classes are removed and the exit-done class is added to the DOM node.

type: Function(node: HtmlElement)
CSSTransition
A transition component inspired by the excellent ng-animate library, you should use it if you're using CSS transitions or animations. It's built upon the Transition component, so it inherits all of its props.

CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. The first class is applied and then a second *-active class in order to activate the CSS transition. After the transition, matching *-done class names are applied to persist the transition state.

function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>
          {"I'll receive my-node-* classes"}
        </div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}
When the in prop is set to true, the child component will first receive the class example-enter, then the example-enter-active will be added in the next tick. CSSTransition forces a reflow between before adding the example-enter-active. This is an important trick because it allows us to transition between example-enter and example-enter-active even though they were added immediately one after another. Most notably, this is what makes it possible for us to animate appearance.

.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 200ms;
}
*-active classes represent which styles you want to animate to.

Note: If you're using the appear prop, make sure to define styles for .appear-* classes as well.

Example

Props Accepts all props from <Transition> unless otherwise noted.
classNames
The animation classNames applied to the component as it appears, enters, exits or has finished the transition. A single name can be provided and it will be suffixed for each stage: e.g.

classNames="fade" applies fade-appear, fade-appear-active, fade-appear-done, fade-enter, fade-enter-active, fade-enter-done, fade-exit, fade-exit-active, and fade-exit-done.

Note: fade-appear-done and fade-enter-done will both be applied. This allows you to define different behavior for when appearing is done and when regular entering is done, using selectors like .fade-enter-done:not(.fade-appear-done). For example, you could apply an epic entrance animation when element first appears in the DOM using Animate.css. Otherwise you can simply use fade-enter-done for defining both cases.

Each individual classNames can also be specified independently like:

classNames={{
 appear: 'my-appear',
 appearActive: 'my-active-appear',
 appearDone: 'my-done-appear',
 enter: 'my-enter',
 enterActive: 'my-active-enter',
 enterDone: 'my-done-enter',
 exit: 'my-exit',
 exitActive: 'my-active-exit',
 exitDone: 'my-done-exit',
}}
If you want to set these classes using CSS Modules:

import styles from './styles.css';
you might want to use camelCase in your CSS file, that way could simply spread them instead of listing them one by one:

classNames={{ ...styles }}
type: string | { appear?: string, appearActive?: string, appearDone?: string, enter?: string, enterActive?: string, enterDone?: string, exit?: string, exitActive?: string, exitDone?: string, }
default: ''
onEnter
A <Transition> callback fired immediately after the 'enter' or 'appear' class is applied.

type: Function(node: HtmlElement, isAppearing: bool)
onEntering
A <Transition> callback fired immediately after the 'enter-active' or 'appear-active' class is applied.

type: Function(node: HtmlElement, isAppearing: bool)
onEntered
A <Transition> callback fired immediately after the 'enter' or 'appear' classes are removed and the done class is added to the DOM node.

type: Function(node: HtmlElement, isAppearing: bool)
onExit
A <Transition> callback fired immediately after the 'exit' class is applied.

type: Function(node: HtmlElement)
onExiting
A <Transition> callback fired immediately after the 'exit-active' is applied.

type: Function(node: HtmlElement)
onExited
A <Transition> callback fired immediately after the 'exit' classes are removed and the exit-done class is added to the DOM node.

type: Function(node: HtmlElement)`}</div>
  );
}
function Page2(props) {
  return (
    <div className="page page2">{`CSSTransition
  A transition component inspired by the excellent ng-animate library, you should use it if you're using CSS transitions or animations. It's built upon the Transition component, so it inherits all of its props.
  
  CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. The first class is applied and then a second *-active class in order to activate the CSS transition. After the transition, matching *-done class names are applied to persist the transition state.
  
  function App() {
    const [inProp, setInProp] = useState(false);
    return (
      <div>
        <CSSTransition in={inProp} timeout={200} classNames="my-node">
          <div>
            {"I'll receive my-node-* classes"}
          </div>
        </CSSTransition>
        <button type="button" onClick={() => setInProp(true)}>
          Click to Enter
        </button>
      </div>
    );
  }
  When the in prop is set to true, the child component will first receive the class example-enter, then the example-enter-active will be added in the next tick. CSSTransition forces a reflow between before adding the example-enter-active. This is an important trick because it allows us to transition between example-enter and example-enter-active even though they were added immediately one after another. Most notably, this is what makes it possible for us to animate appearance.
  
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
  *-active classes represent which styles you want to animate to.
  
  Note: If you're using the appear prop, make sure to define styles for .appear-* classes as well.
  
  Example
  
  Props Accepts all props from <Transition> unless otherwise noted.
  classNames
  The animation classNames applied to the component as it appears, enters, exits or has finished the transition. A single name can be provided and it will be suffixed for each stage: e.g.
  
  classNames="fade" applies fade-appear, fade-appear-active, fade-appear-done, fade-enter, fade-enter-active, fade-enter-done, fade-exit, fade-exit-active, and fade-exit-done.
  
  Note: fade-appear-done and fade-enter-done will both be applied. This allows you to define different behavior for when appearing is done and when regular entering is done, using selectors like .fade-enter-done:not(.fade-appear-done). For example, you could apply an epic entrance animation when element first appears in the DOM using Animate.css. Otherwise you can simply use fade-enter-done for defining both cases.
  
  Each individual classNames can also be specified independently like:
  
  classNames={{
   appear: 'my-appear',
   appearActive: 'my-active-appear',
   appearDone: 'my-done-appear',
   enter: 'my-enter',
   enterActive: 'my-active-enter',
   enterDone: 'my-done-enter',
   exit: 'my-exit',
   exitActive: 'my-active-exit',
   exitDone: 'my-done-exit',
  }}
  If you want to set these classes using CSS Modules:
  
  import styles from './styles.css';
  you might want to use camelCase in your CSS file, that way could simply spread them instead of listing them one by one:
  
  classNames={{ ...styles }}
  type: string | { appear?: string, appearActive?: string, appearDone?: string, enter?: string, enterActive?: string, enterDone?: string, exit?: string, exitActive?: string, exitDone?: string, }
  default: ''
  onEnter
  A <Transition> callback fired immediately after the 'enter' or 'appear' class is applied.
  
  type: Function(node: HtmlElement, isAppearing: bool)
  onEntering
  A <Transition> callback fired immediately after the 'enter-active' or 'appear-active' class is applied.
  
  type: Function(node: HtmlElement, isAppearing: bool)
  onEntered
  A <Transition> callback fired immediately after the 'enter' or 'appear' classes are removed and the done class is added to the DOM node.
  
  type: Function(node: HtmlElement, isAppearing: bool)
  onExit
  A <Transition> callback fired immediately after the 'exit' class is applied.
  
  type: Function(node: HtmlElement)
  onExiting
  A <Transition> callback fired immediately after the 'exit-active' is applied.
  
  type: Function(node: HtmlElement)
  onExited
  A <Transition> callback fired immediately after the 'exit' classes are removed and the exit-done class is added to the DOM node.
  
  type: Function(node: HtmlElement)
  CSSTransition
  A transition component inspired by the excellent ng-animate library, you should use it if you're using CSS transitions or animations. It's built upon the Transition component, so it inherits all of its props.
  
  CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition. The first class is applied and then a second *-active class in order to activate the CSS transition. After the transition, matching *-done class names are applied to persist the transition state.
  
  function App() {
    const [inProp, setInProp] = useState(false);
    return (
      <div>
        <CSSTransition in={inProp} timeout={200} classNames="my-node">
          <div>
            {"I'll receive my-node-* classes"}
          </div>
        </CSSTransition>
        <button type="button" onClick={() => setInProp(true)}>
          Click to Enter
        </button>
      </div>
    );
  }
  When the in prop is set to true, the child component will first receive the class example-enter, then the example-enter-active will be added in the next tick. CSSTransition forces a reflow between before adding the example-enter-active. This is an important trick because it allows us to transition between example-enter and example-enter-active even though they were added immediately one after another. Most notably, this is what makes it possible for us to animate appearance.
  
  .my-node-enter {
    opacity: 0;
  }
  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .my-node-exit {
    opacity: 1;
  }
  .my-node-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
  *-active classes represent which styles you want to animate to.
  
  Note: If you're using the appear prop, make sure to define styles for .appear-* classes as well.
  
  Example
  
  Props Accepts all props from <Transition> unless otherwise noted.
  classNames
  The animation classNames applied to the component as it appears, enters, exits or has finished the transition. A single name can be provided and it will be suffixed for each stage: e.g.
  
  classNames="fade" applies fade-appear, fade-appear-active, fade-appear-done, fade-enter, fade-enter-active, fade-enter-done, fade-exit, fade-exit-active, and fade-exit-done.
  
  Note: fade-appear-done and fade-enter-done will both be applied. This allows you to define different behavior for when appearing is done and when regular entering is done, using selectors like .fade-enter-done:not(.fade-appear-done). For example, you could apply an epic entrance animation when element first appears in the DOM using Animate.css. Otherwise you can simply use fade-enter-done for defining both cases.
  
  Each individual classNames can also be specified independently like:
  
  classNames={{
   appear: 'my-appear',
   appearActive: 'my-active-appear',
   appearDone: 'my-done-appear',
   enter: 'my-enter',
   enterActive: 'my-active-enter',
   enterDone: 'my-done-enter',
   exit: 'my-exit',
   exitActive: 'my-active-exit',
   exitDone: 'my-done-exit',
  }}
  If you want to set these classes using CSS Modules:
  
  import styles from './styles.css';
  you might want to use camelCase in your CSS file, that way could simply spread them instead of listing them one by one:
  
  classNames={{ ...styles }}
  type: string | { appear?: string, appearActive?: string, appearDone?: string, enter?: string, enterActive?: string, enterDone?: string, exit?: string, exitActive?: string, exitDone?: string, }
  default: ''
  onEnter
  A <Transition> callback fired immediately after the 'enter' or 'appear' class is applied.
  
  type: Function(node: HtmlElement, isAppearing: bool)
  onEntering
  A <Transition> callback fired immediately after the 'enter-active' or 'appear-active' class is applied.
  
  type: Function(node: HtmlElement, isAppearing: bool)
  onEntered
  A <Transition> callback fired immediately after the 'enter' or 'appear' classes are removed and the done class is added to the DOM node.
  
  type: Function(node: HtmlElement, isAppearing: bool)
  onExit
  A <Transition> callback fired immediately after the 'exit' class is applied.
  
  type: Function(node: HtmlElement)
  onExiting
  A <Transition> callback fired immediately after the 'exit-active' is applied.
  
  type: Function(node: HtmlElement)
  onExited
  A <Transition> callback fired immediately after the 'exit' classes are removed and the exit-done class is added to the DOM node.
  
  type: Function(node: HtmlElement)`}</div>
  );
}
