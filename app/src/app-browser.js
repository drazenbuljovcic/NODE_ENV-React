import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  browserHistory,
  IndexRoute,
  Route }
from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Main from './Main';
import Home from './components/Home';

import '@/styles/inline';

if(env === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Main />
    </Router>
  </Provider>,
  document.body
)