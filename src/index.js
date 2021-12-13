import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>{/* 嚴格檢查(開發模式下，以下生命週期執行兩次)：
                          constructor、render、shouldComponentUpdate、
                          getDerivedStateFromProps、
                          Function component、
                          setState 的第一個參數、
                          useState、useMemo 或 useReducer 
                        https://zh-hant.reactjs.org/docs/strict-mode.html*/}
    <div>
      <h1>Hello World</h1>   
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
