import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import NavBarContainer from './navbar_container';

class Body extends React.Component {
  constructor() {
    super();
    this.background = this.background.bind(this);
    this.state = {background: "home"};
    this.toggleBackground = this.toggleBackground.bind(this);
  }

  toggleBackground(style) {
    console.log(style);
    this.setState({background: style});
  }

  background() {
    switch(this.state.background) {
      case "home":
        return (
          <div>
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div>
        );
      case "dev":
        return(
            <div className="live-coding">
              <h1 id="overlay"></h1>
            </div>
        );
      default:
        return (
          <div>
            <div className="stars"></div>
            <div className="twinkling"></div>
          </div>
        );
    }
  }

  render() {
    console.log(this.state);
    return(
      <div>
        {this.background()}
        <div id="navbar-container">
          <NavBarContainer toggle={this.toggleBackground}/>
        </div>
      </div>
    );
  }
}

export default Body;
