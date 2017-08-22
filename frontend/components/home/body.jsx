import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import HomeContainer from './home_container';

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
        <div>
        <HomeContainer background={this.state.background}/>
        </div>
      </div>
    );
  }
}

export default Body;
