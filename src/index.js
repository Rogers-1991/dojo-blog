import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* This 'App' component is being rendered to the DOM */}
    <App />
  </React.StrictMode>,
  // The 'App' component is being rendered to the DOM at this position, the 'root' component.
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

