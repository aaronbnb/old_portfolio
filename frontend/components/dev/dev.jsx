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
        <div className='skills'>

              <ul className="list-group">
                <li className="list-group-item">
                  <div id="html5-icon"></div>
                  HTML5
                </li>
                <li className="list-group-item">
                  <div id="css3-icon"></div>
                  CSS3
                </li>
                <li className="list-group-item">
                  <div id="js-icon"></div>
                  JavaScript
                  <span id="es6">ES6</span>
                </li>
                <li className="list-group-item">
                  <div id="access-icon"></div>
                  Web Accessibility
                </li>
                <li className="list-group-item">
                  <div id="gcloud-icon"></div>
                  Google Cloud
                </li>
                <li className="list-group-item">
                  <div id="react-icon"></div>
                  React / React Native
                </li>
                <li className="list-group-item">
                  <div id="ror-icon"></div>
                  Ruby on Rails
                </li>
                <li className="list-group-item">
                  <div id="sql-icon"></div>
                  SQL
                </li>
              </ul>

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
