import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Main />,
  document.querySelector('#app')
)