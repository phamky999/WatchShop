import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/normalize.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './index.css';
import './assets/css/bootstrap-grid.css';
import './assets/css/base.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
