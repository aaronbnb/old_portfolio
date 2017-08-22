import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div id="home-container">
        <p className="home-text">aaron</p>
        <p className="home-text">farber</p>
        <p className="home-text">is</p>
        <p className="home-text">here</p>
      </div>
    );
  }

}

export default Home;
