import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import NavBarContainer from './navbar_container';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {background: ["stars", "twinkling"};
    this.toggleBackground = this.toggleBackground.bind(this);
  }

  toggleBackground(path) {
    console.log(path);
    if (path === 'dev') {
      document.getElementById('bg1').addClass()

    }
    this.setState({background: path});
  }

  render() {

    return(
      <div>
        <div id="bg1" className={this.state.background}></div>
        <div id="bg2" className={(this.state.background === "stars") ? "twinkling" : ""}></div>
        <div id="navbar-container">
          <NavBarContainer toggle={this.toggleBackground}/>
        </div>
      </div>
    );
  }
}

export default Body;
