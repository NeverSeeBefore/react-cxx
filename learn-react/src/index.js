import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './components/Content';


function handleClick (e) {
  console.log(222, e);
}

const btn = <button onClick={handleClick} onMouseEnter={handleClick}>click</button>

ReactDOM.render(<Content></Content>, document.getElementById('root'));

