import React from 'react';
import { connect } from 'react-redux';

export class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <img className="main-image" src={require('@/assets/images/logo.svg')} />
    );
  }
}

export default connect(state => state)(Home);