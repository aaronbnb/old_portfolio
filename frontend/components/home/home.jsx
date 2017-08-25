import React from 'react';
import Mailto from 'react-mailto';
import {withRouter, Link, hashHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <div className="jumbotron" id="jt3">
          <div className='profile-container'>
            <div className='self-image' role="img" aria-label="Aaron Farber professional headshot"></div>
            <h1 className="display-3">Aaron Farber</h1>
          </div>
            <p className="lead">Software developer and instructor with a passion for web accessibility, online education, and Thai food.</p>
          <hr className="my-4"/>
            <div className="contact-info">
              <p>
                  <span id="phone">
                   <i className="fa fa-phone fa-fw" id="phone"></i>
                   &nbsp;&nbsp;<span>916.606.2848</span>
                 </span>
                   <br />
                   <Mailto email='aaronfarber9@gmail.com' obfuscate={false} id="email">
                     <i className="fa fa-envelope fa-fw"></i>
                     &nbsp;&nbsp;<span>aaronfarber9@gmail.com</span>
                  </Mailto>
              </p>
              <p>
                    <a href="https://github.com/aaronbnb"
                      target="_blank" className="external-link">
                        <i className="fa fa-github fa-fw"></i>
                        <span>&nbsp;&nbsp;Github</span>
                    </a>
                    <br />
                    <a href="https://linkedin.com/in/aaronfarber"
                      target="_blank" className="external-link">
                        <i className="fa fa-linkedin fa-fw"></i>
                        <span>&nbsp;&nbsp;Linkedin</span>
                    </a>
              </p>
            </div>
        </div>
      </div>
    );
  }

}

export default Home;
