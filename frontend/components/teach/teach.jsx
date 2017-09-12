import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';
import TeachSidebar from './teach_sidebar';
import TeachBio from './teach_bio';
import StudentTestimonySection from './student_testimony_section';

class Teach extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="teach-container">
        <div id="teach-text">

        <TeachBio />

        <TeachSidebar />
        </div>
        <StudentTestimonySection />
      </div>
    );
  }
}

export default Teach;
