import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import decode from 'jwt-decode';
import {syncInfoAc} from './pages/Login/store/actionCreators'

const tk = localStorage.getItem('@#@TOKEN');
// 解析TOKEN并同步到Redux
if(tk){
  try{
    store.dispatch(syncInfoAc(decode(tk)))
  }catch{
    localStorage.removeItem('@#@TOKEN');
    window.location.href = '/login';
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
