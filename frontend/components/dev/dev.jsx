import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class Dev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div className='dev-container'>
        <p>We're here</p>
      </div>
    );
  }
}

export default Dev;
