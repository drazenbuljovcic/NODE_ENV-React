import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import styles from '@/styles/main';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Route path="/" exact component={Home} />
      </div>
    )
  }
}