import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import TeachSidebar from './teach-sidebar';
import StudentTestimonySection from './student_testimony_section';

class Teach extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="teach-container">
        <div id="teach-text">
          <div className="test-prep-bio-container">
            <p id="test-prep-quote">I help students present the best version of themselves</p>
            <p id="test-prep-context">
              Test prep doesn't have to be a burden or just another hurdle to college admission.
              The latest SAT/ACT focuses on understanding relationships--the connections between ideas
               or between numbers. My prep classes develop an ability with value far outlasting test day.
              As colleges and grad schools weigh these four hour tests sometimes more for four years
              of school, test prep presents the greatest opportunity to improve your application in a short time.
            </p>

            <p id="test-prep-bio">I worked for years as an SAT, ACT, GRE Instructor for Kaplan Test Prep.
            I've been ranked as an <em>All-Star</em> Teacher for high teacher performance ratings and student
            satisfaction.
            </p>

            <p id="test-prep-bio">My classes are comprehensive and all-inclusive. For each session, I provide original course materials,
            homework to ensure mastery, and recap guides. I don't proctor practice tests as my students are expected to do so on their own time.
            </p>

            <p id="test-prep-bio">I have some core assumptions about test prep, teaching, and learning that are the root of my work.
            </p>

            <ul id="test-prep-assumptions">
              <li>Students and teachers have a two-way relationship. Students take their lead from their teachers. However much students give,
                I give it back to them. </li>
              <li>Students have been brainwashed into believing they're good at reading but not at math or vice versa.
              That's not how the brain works. If a student is not as strong at one subject, I've learned that they
              need to understand the other subjects in the same way that they are strong at. The skills that make someone strong at math or at writing
              apply to the other discipline just as well. It just takes reframing.</li>
            <li>Humor is a powerful tool for learning. When a student can laugh about a topic or a concept,
            it means <em>they get it</em>. Yes, I'm an animated dude and I carry it over to the classroom.</li>
            </ul>

        <StudentTestimonySection />
          </div>

        <TeachSidebar />
        </div>
      </div>
    );
  }
}

export default Teach;
