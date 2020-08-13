import React from 'react';
import ReactDOM from 'react-dom';
import './common/css/global.scss';
import 'antd-mobile/dist/antd-mobile.css';
// import App from './App';
// import { hashHistory } from 'react-router';
import { createHashHistory } from 'history';
import RouterMaps from "./router/index"
// import * as serviceWorker from './serviceWorker';
const hashHistory = createHashHistory();

ReactDOM.render(
  <React.StrictMode>
    <RouterMaps history={hashHistory} />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
