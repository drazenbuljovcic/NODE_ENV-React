import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <p>About - <Link to="/">Home</Link></p>
        <img width="200" className="main-image" src={require('@/assets/images/logo.svg')} />
      </div>
    );
  }
}