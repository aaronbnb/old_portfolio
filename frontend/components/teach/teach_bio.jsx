import React from 'react';

class TeachBio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="test-prep-bio-container">
        <div id="test-prep-quote-container">
        <p id="test-prep-quote">I help students present the best version of themselves</p>
        </div>
        <p id="test-prep-context">
          Test prep doesn't have to be a burden or just another hurdle to college admission.
          The obligation presents the opportunity to examine and consider how we generate insights
          from information. My prep classes focus on developing the skills underlying success on
          the SAT/ACT/GRE, preparing students for higher education rather than merely cramming test strategies of little value beyond test day.
          Students better understand the relationship between ideas and how to evaluate
          an argument and its evidence. Math curriculum taps our real-world experiences
          --the logic in how we make tens of estimates and calculations each day.
          <br></br>
          <br></br>
          As colleges and grad schools weigh these four hour tests sometimes more for four years
          of school, test prep presents the greatest opportunity to improve your application in a short time.
        </p>

        <p id="test-prep-bio">I worked for years as an SAT, ACT, GRE Instructor for Kaplan Test Prep.
        I've been ranked as an <em>All-Star</em> Teacher for high teacher performance ratings and student
        satisfaction. Students, at all test score ranges, have achieved significant score improvement.
        </p>

        <p id="test-prep-bio">My classes are comprehensive and all-inclusive. For each session, I provide original course materials,
        homework to ensure mastery, and recap guides. I don't proctor practice tests as it is unnecessary charge; my students are expected to take them on their own time.
        </p>

        <p id="test-prep-bio">I have some core assumptions about test prep, teaching, and learning that are the root of my work.
        </p>

        <ul id="test-prep-assumptions">
          <li><i className="fa fa-certificate" aria-hidden="true"></i><span id="assumption">Students and teachers have a two-way relationship. Students take their lead from their teachers. However much students give,
            I give it back to them.</span></li>
          <li><i className="fa fa-certificate" aria-hidden="true"></i><span id="assumption">If a student is not as strong at one subject, I've learned that they
          need to understand the other subjects in the same way that they are strong at. The skills that make someone strong at math or at writing
          apply to the other discipline just as well. It just takes reframing.</span></li>
        <li><i className="fa fa-certificate" aria-hidden="true"></i><span id="assumption">Test prep is one of the seemingly small, but potent inequities in education. A <em>standardized </em>
        test should be an even playing field where each student has access to high quality, affordable resources.
        </span></li>
      <li><i className="fa fa-certificate" aria-hidden="true"></i><span id="assumption">An effective teacher should direct students to all valuable resources regardless of whether they developed it themselves or it means reduced teaching hours.</span></li>
          <li><i className="fa fa-certificate" aria-hidden="true"></i><span id="assumption">Humor is a powerful tool for learning. When a student can laugh about a topic or a concept,
          it means <em>they get it</em>. Yes, I'm an animated dude and I carry it over to the classroom.</span></li>
        </ul>
      </div>
    );
  }
}

export default TeachBio;
