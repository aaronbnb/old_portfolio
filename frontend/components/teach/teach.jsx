import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import TeachSidebar from './teach-sidebar';

class Teach extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="teach-container">
        <div id="teach-text">
          <div className="test-prep-bio-container">

            <p className="lead">Colleges and grad schools weigh these four hour tests sometimes more
              for four years of school. Standardized testing is an opportunity to learn and dramatically boost your applications
            in a short time.</p>
            <p id="test-prep-bio">Test prep doesn't have to be just another hurdle to admission.
            For my test prep classes, students learn new ways to interpret arguments and bridge the gap between
            equations and the world around us. I believe test prep has value far beyond the tests.
            And no matter what happens, you can never take any someone's knowledge. It is power.</p>
          <p id="test-prep-bio">I've worked for years as an SAT, ACT, GRE Instructor for Kaplan Test Prep.
          I'm ranked as an <em>All-Star</em> Teacher for high teacher performance ratings and student
          satisfaction. Beyond tutoring, I go to bat for my students. I help in any way I can--reviewing personal statements,
          recommending application strategies, and identifying extracurricular opportunites of the most value.</p>
            <p id="test-prep-bio">I have some core assumptions about test prep, teaching, and learning that are the root of my work.</p>
            <ul id="test-prep-assumptions">
              <li>Students and teachers have a two-way relationship. Students take their lead from their teachers. However much students give,
                I give it back to them. </li>
              <li>Students are not good at math but then bad at writing or bad at math but good at verbal.
              That's not how the brain works. If a student is strong at one subject, I've learned that they
              need to understand the other subjects in the same way. The skills that make someone strong at math or at writing
              apply to the other discipline just as well. It just takes direction.</li>
            <li>Humor is a powerful tool for learning. When a student can laugh about a topic or a concept,
            it means <em>they get it</em>. Yes, I'm an animated dude and I carry over to the classroom.</li>
            </ul>
          </div>

        <TeachSidebar />
        </div>
      </div>
    );
  }
}

export default Teach;
//
//
// <div className="card" id="services">
//   <h2 className="test-prep-title">Services</h2>
//   <hr className="my-4"/>
//     <ul className="list-group">
//       <li className="list-group-item justify-content-between">
//         Cras justo odio
//         <span className="badge badge-default badge-pill">14</span>
//       </li>
//       <li className="list-group-item justify-content-between">
//         Dapibus ac facilisis in
//         <span className="badge badge-default badge-pill">2</span>
//       </li>
//       <li className="list-group-item justify-content-between">
//         Morbi leo risus
//         <span className="badge badge-default badge-pill">1</span>
//       </li>
//     </ul>
// </div>
// <div className="card" id="services">
//   <h2 className="test-prep-title">Services</h2>
//   <hr className="my-4"/>
//     <ul className="list-group">
//       <li className="list-group-item justify-content-between">
//         Cras justo odio
//         <span className="badge badge-default badge-pill">14</span>
//       </li>
//       <li className="list-group-item justify-content-between">
//         Dapibus ac facilisis in
//         <span className="badge badge-default badge-pill">2</span>
//       </li>
//       <li className="list-group-item justify-content-between">
//         Morbi leo risus
//         <span className="badge badge-default badge-pill">1</span>
//       </li>
//     </ul>
// </div>
