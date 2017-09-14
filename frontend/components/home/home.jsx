import React from 'react';
import Mailto from 'react-mailto';
import {withRouter, Link, hashHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='dev-container'>
        <div id="jt3">
          <div id="contact-box">
            <div className='profile-container'>
              <div className='self-image' role="img" aria-label="Aaron Farber professional headshot"></div>
            </div>

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
          <div id="description">
            <p className="lead">I'm a software developer with a passion for web accessibility.</p>
          </div>

        </div>
      </div>
    );
  }

}

export default Home;
