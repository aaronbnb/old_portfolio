import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import NavBarContainer from './navbar_container';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {background: "stars"};
  }

  render() {

    return(
      <div>
        <div className={this.state.background}></div>
        <div className={(this.state.background === "stars") ? "twinkling" : ""}></div>
        <div id="navbar-container">
          <NavBarContainer />
        </div>
      </div>
    );
  }
}

export default Body;
