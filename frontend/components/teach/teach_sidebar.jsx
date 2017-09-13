import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class TeachSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="sidebar">
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
                    <li id="list-item"><span id="class-count">5 Three Hour Sessions</span><span className="money"><span id="money-sign">$</span>750</span></li>
                    <li id="list-item"><span id="class-count">5 Two Hour Sessions</span><span className="money"><span id="money-sign">$</span>550</span></li>
                    <li id="list-item"><span id="class-count">5 One Hour Sessions</span><span className="money"><span id="money-sign">$</span>300</span></li>
                  </ul>
                  <ul id="class-footnotes">
                    <li>All-Inclusive:</li>
                    <li>Original Course Materials</li>
                    <li>Study Guide</li>
                    <li>Homework Assignments</li>
                  </ul>
                </div>
              </div>
              <div className="services-list-item">
                <i className="fa fa-certificate" aria-hidden="true"></i>
                <span>Individual Tutoring Sessions</span>
                <div>
                  <ul id="class-rates">
                    <li><span id="class-count">In-Person</span><span className="money"><span id="money-sign">$</span>65<span id="hour">/ hour</span></span></li>
                    <li><span id="class-count">Google Hangouts/Skype</span><span className="money"><span id="money-sign">$</span>45<span id="hour">/ hour</span></span></li>
                  </ul>
                </div>
              </div>
              <div className="services-list-item">
                <i className="fa fa-certificate" aria-hidden="true"></i>
                <span>Personal Statement Consultation</span>
                <ul id="class-rates">
                  <li><span id="class-count">Comprehensive Review</span><span className="money"><span id="money-sign">$</span>180</span></li>
                  <li><span id="class-notes">3 Sessions:</span></li>
                </ul>
                <ul id="class-footnotes">
                  <li>(1) Brainstorming a Narrative</li>
                  <li>(2) Feedback and Revision</li>
                  <li>(3) Final Touches</li>
                </ul>
            </div>

            <div className="services-list-item">
              <i className="fa fa-certificate" aria-hidden="true"></i>
              <span>Scholarships Available</span>
              <ul id="class-footnotes">
                <li>For families on government assistance such
                as CalFresh or with other proof of need, I
                offer a 40% discount  on all services.</li>
              </ul>
          </div>
          </div>
      </div>
    </div>

    );
  }
}

export default TeachSidebar;
