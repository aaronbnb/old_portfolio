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
