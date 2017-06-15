import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import styles from '@/styles/main';

export default class Main extends React.Component {
  render() {
    return (
      <div id="main" className={styles.main}>
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}