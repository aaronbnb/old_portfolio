import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class Dev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className='dev-container'>
        <div id="intro">
          <h1 id="my-work">My Work</h1>
        </div>
        <div className="card">
          <div className="card-block">
            <div className="top-box">
              <div className="project-pic"></div>
              <div className="project-links">
                <a href="#" className="card-link">
                  <i id="link-icon" className="fa fa-link" aria-hidden="true"></i>
                </a>
                <a href="#" className="card-link">
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
              <div className="project-pic"></div>
              <div className="project-links">
                <a href="#" className="card-link">
                  <i id="link-icon" className="fa fa-link" aria-hidden="true"></i>
                </a>
                <a href="#" className="card-link">
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
              <div className="project-pic"></div>
              <div className="project-links">
                <a href="#" className="card-link">
                  <i id="link-icon" className="fa fa-link" aria-hidden="true"></i>
                </a>
                <a href="#" className="card-link">
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
      </div>
    );
  }
}

export default Dev;
