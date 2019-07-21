import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Lifecyche from './Lifecyche';

// ReactDOM.render(<h1>React 真酷</h1>,documesnt.querySelector('#root'))
//  ReactDOM.render(<App/>,document.querySelector('#root'))
ReactDOM.render(<Lifecyche prop="some prop"/>,document.querySelector('#root'))

//动态渲染
// function tick(){
//     ReactDOM.render(<h2>{new Date().toLocaleDateString()}</h2>,document.querySelector('#root'))
// }
// setInterval(tick,1000)