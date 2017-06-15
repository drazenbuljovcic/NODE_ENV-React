import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  browserHistory }
  from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Main from './Main';

import '@/styles/inline';

if(env === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}

Promise.resolve(
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Main />
      </Router>
    </Provider>,
    document.querySelector('#app')
  )).then(() => {

  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
  
});