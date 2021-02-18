import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import store from "./store";//./store的index.js作为'仓库'
import App from './App'

import decode from 'jwt-decode';
const tk = localStorage.getItem('@#@TOKEN');
// 解析TOKEN并同步到Redux
if(tk){
  try{
    store.dispatch({
      type:'SYNC_STATE_INFO',
      payload:decode(tk)
    })
  }catch{
    localStorage.removeItem('@#@TOKEN');
    window.location.href = '/login';
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);