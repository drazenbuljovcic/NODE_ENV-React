import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

import '@/styles/inline';
import '@/styles/main';

if(env === 'development')
  if (module.hot)
    module.hot.accept();


ReactDOM.render(
  <Main />,
  document.querySelector('#app')
)