import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import NavBarContainer from './navbar_container';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.background = this.background.bind(this);
    this.state = {background: "home"};
    this.toggleBackground = this.toggleBackground.bind(this);
  }

  toggleBackground(style) {
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
          <div>
            <div className="live-coding">
            </div>
          </div>
        );
      case "teach":
        return(
          <div>
            <div className="live-coding" id="teach">
            </div>
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
