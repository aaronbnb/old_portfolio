import React from 'react';

class StudentTestimonySection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div id="student-testimonies">
        <div id="student-testimony">
          <p>I found the class to be very helpful, and it taught me a lot about the SAT.
            I also took the PSAT class and the PSAT test afterwards, and the class helped me a lot.
            Not only did the class help me for the test, but it also taught me how to carry over various
            concepts about writing, reading, and math over to school.
          </p>
          <p id="date">June 2016</p>
        </div>
        <div id="student-testimony">
          <p>Aaron was an extremely well prepared teacher. He knew how to engage each and every one of us.
             He allowed us time to fix our mistakes and learn from them. His reasoning was very intelligent.
              I learned so much from him.
            </p>
            <p id="date">Sept. 2016</p>
        </div>
        <div id="student-testimony">
          <p>He was considerate, knowledgeable, and involved. The class was like three hours,
            but you wouldn't think so because you could get into the lesson and it was pretty interactive.
          </p>
          <p id="date">Jan. 2017</p>
        </div>
      </div>
    );
  }
}

export default StudentTestimonySection;
