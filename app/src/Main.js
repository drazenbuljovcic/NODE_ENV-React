import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import styles from '@/styles/main';

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Route path="/" exact component={Home} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Main);