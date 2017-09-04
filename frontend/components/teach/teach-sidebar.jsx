import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class TeachSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <div id="sidebar-item">
        <h2 className="services-title">Services</h2>
        <hr className="my-4" id="divider"/>
          <div id="services-list">
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>Test Prep Tutoring</span>
              <div>
                <ul id="tests">
                  <li>SAT</li>
                  <li>ACT</li>
                  <li>GRE</li>
                </ul>
              </div>
            </div>
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>College Admissions Advising</span>

            </div>
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>Personal Statement Consultation</span>

            </div>
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>Coding Bootcamp Prepwork</span>
              <ul id="tests">
                <li>JavaScript</li>
                <li>Python</li>
                <li>Ruby</li>
              </ul>
            </div>
          </div>
      </div>
      <div id="sidebar-item">
        <h2 className="services-title">Pricing</h2>
        <hr className="my-4" id="divider"/>
          <div id="services-list">
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>SAT / ACT Class Packages</span>
              <div>
                <ul id="class-rates">
                  <li><span id="class-count">4 Three Hour Sessions</span><span className="money"><span id="money-sign">$</span>425</span></li>
                  <li><span id="class-count">4 Two Hour Sessions</span><span className="money"><span id="money-sign">$</span>320</span></li>
                  <li><span id="class-count">4 One Hour Sessions</span><span className="money"><span id="money-sign">$</span>180</span></li>
                </ul>
              </div>
            </div>
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>Individual Tutoring Sessions</span>
              <div>
                <ul id="class-rates">
                  <li><span id="class-count">In-Person</span><span className="money"><span id="money-sign">$</span>50<span id="hour">/ hour</span></span></li>
                  <li><span id="class-count">Google Hangouts/Skype</span><span className="money"><span id="money-sign">$</span>35<span id="hour">/ hour</span></span></li>
                </ul>
              </div>
            </div>
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>College Admissions Advising</span>

            </div>
            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>Personal Statement Consultation</span>
              <ul id="class-rates">
                <li><span id="class-count">Comprehensive Review</span><span className="money"><span id="money-sign">$</span>75</span></li>
              </ul>
          </div>
          </div>
      </div>
    </div>

    );
  }
}

export default TeachSidebar;
