import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>Home - {this.props.config.env}</p>
    )
  }
}
export default connect(state => state)(Home);