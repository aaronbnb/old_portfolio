import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import HomeContainer from './home_container';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {stars: true};
  }

  render() {

    return(
      <div>
        <div className={this.state.stars ? "stars" : ""}></div>
        <div className="twinkling"></div>
        <div>
        <HomeContainer stars={this.state.stars}/>
        </div>
      </div>
    );
  }
}

export default Body;
