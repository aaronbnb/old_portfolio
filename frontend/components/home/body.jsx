import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import NavBarContainer from './navbar_container';

class Body extends React.Component {
  constructor() {
    super();
    this.background = this.background.bind(this);
    this.state = {background: "stars"};
    this.toggleBackground = this.toggleBackground.bind(this);
  }

  toggleBackground(path) {
    console.log(path);
    this.setState({background: path});
  }

  background() {
    switch(this.state.background) {
    case "stars":
        return "stars"
        break;
    case n:
        code block
        break;
    default:
        code block
}
  }

  render() {

    return(
      <div>
        <div id="bg1"
          className={this.background()}></div>
        <div id="bg2" className={(this.state.background === "stars") ? "twinkling" : ""}></div>
        <div id="navbar-container">
          <NavBarContainer toggle={this.toggleBackground}/>
        </div>
      </div>
    );
  }
}

export default Body;
