import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <div className="jumbotron" id="jt3">
          <div className='profile-container'>
            <div className='self-image'></div>
            <h1 className="display-3">Aaron Farber</h1>
          </div>
            <p className="lead">Software developer and instructor with a passion for web accessibility, online education, and Thai food.</p>
          <hr className="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
      </div>
    );
  }

}

export default Home;
