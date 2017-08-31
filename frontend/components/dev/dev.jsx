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
                <h6 className="card-subtitle mb-2 text-muted">HTML/CSS, JavaScript, React/Redux, Rails, Webpack</h6>
              </div>
            </div>
        </div>

        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dev;

//
// <li className="list-group-item justify-content-between">
//   Ruby On Rails
//   <span className="badge badge-default badge-pill">1</span>
// </li>
// <li className="list-group-item justify-content-between">
//   React/React Native
//   <span className="badge badge-default badge-pill">1</span>
// </li>
// <li className="list-group-item justify-content-between">
//   Bootstrap
//   <span className="badge badge-default badge-pill">1</span>
// </li>
// <li className="list-group-item justify-content-between">
//   SQL
//   <span className="badge badge-default badge-pill">1</span>
// </li>
// <li className="list-group-item justify-content-between">
//   Data Visualization
//   <span className="badge badge-default badge-pill">1</span>
// </li>
// <li className="list-group-item justify-content-between">
//   Web Accessibility
//   <span className="badge badge-default badge-pill">1</span>
// </li>
