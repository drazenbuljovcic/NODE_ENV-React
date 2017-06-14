import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={require('@/assets/images/logo.svg')} />
    )
  }
}
export default connect(state => state)(Home);