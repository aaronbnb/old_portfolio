import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class Dev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='dev-container'>
        <div id="intro">
          <h2 className="dev-title">My Work</h2>
          <hr className="my-4" id="divider"/>
        </div>
        <div className="card">
          <div className="card-block">
            <div className="top-box">
              <div className="project-pic" id="achlls"></div>
              <div className="project-links">
                <a href="https://docs.google.com/presentation/d/1-NNViQdq4lbtc3Hd14aycO45S8lDwwa2zBHbB80R30s/edit?usp=sharing"
                  target="_blank" className="card-link">
                  <i id="link-icon" className="fa fa-link" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/aaronbnb/achlls" className="card-link"
                  target="_blank">
                  <i id="gh-icon" className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
              <div className="project-tagline">
                <h4 className="card-title">Achlls</h4>
                <p className="card-text">A Chrome extension using computer vision to generate alternative text attributes for webpage images and optical character recognition to fix non-semantic HTML</p>
                <h6 className="card-subtitle mb-2 text-muted"><em>Chrome, Google Cloud Vision, React, Webpack, Ruby, Web Accessibility</em></h6>
              </div>
            </div>
        </div>

        <div className="card">
          <div className="card-block">
            <div className="top-box">
              <div className="project-pic" id="indieclono"></div>
              <div className="project-links">
                <a href="https://indieclono.herokuapp.com" className="card-link"
                  target="_blank">
                  <i id="link-icon" className="fa fa-link" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/aaronbnb/full_stack" className="card-link"
                  target="_blank">
                  <i id="gh-icon" className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
              <div className="project-tagline">
                <h4 className="card-title">Indieclono</h4>
                <p className="card-text">A full-stack fundraising platform inspired by Indiegogo</p>
                <h6 className="card-subtitle mb-2 text-muted"><em>HTML/CSS, JavaScript, React/Redux, Rails, Webpack</em></h6>
              </div>
            </div>
        </div>

        <div className="card">
          <div className="card-block">
            <div className="top-box">
              <div className="project-pic" id="exchanger"></div>
              <div className="project-links">
                <a href="https://exchangerranger.github.io/ExchangerRangerDemo/" className="card-link"
                  target="_blank">
                  <i id="link-icon" className="fa fa-link" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/aaaandrea/ExchangerRanger" target="_blank" className="card-link">
                  <i id="gh-icon" className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
            </div>
              <div className="project-tagline">
                <h4 className="card-title">Exchanger Ranger</h4>
                <p className="card-text">An iOS stock market simulation game with realtime quotes, aimed at younger users</p>
                <h6 className="card-subtitle mb-2 text-muted"><em>React Native/Redux, Ruby on Rails, Webpack </em></h6>
              </div>
            </div>
        </div>
        <div id="footer">I'm going to fill this whole page. Just watch.</div>
      </div>
    );
  }
}

export default Dev;
