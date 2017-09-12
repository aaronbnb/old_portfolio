import React from 'react';
import $ from 'jquery';

class StudentTestimonySection extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("mounted");
    setTimeout(1000, function() {
      $('.carousel').carousel({
      interval: 1400
      });
    });
  }

  render() {

    return(
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div id="student-testimony">
            <p>I found the class to be very helpful, and it taught me a lot about the SAT.
              I also took the PSAT class and the PSAT test afterwards, and the class helped me a lot.
              Not only did the class help me for the test, but it also taught me how to carry over various
              concepts about writing, reading, and math over to school.
            </p>
            <p id="date">June 2016</p>
          </div>
        </div>
        <div className="carousel-item">
          <div id="student-testimony">
            <p>Aaron was an extremely well prepared teacher. He knew how to engage each and every one of us.
               He allowed us time to fix our mistakes and learn from them. His reasoning was very intelligent.
                I learned so much from him.
              </p>
              <p id="date">Sept. 2016</p>
          </div>
        </div>
        <div className="carousel-item">
          <div id="student-testimony">
            <p>Aaron was considerate, knowledgeable, and involved. The class was like three hours,
              but you wouldn't think so because you could get into the lesson and it was pretty interactive.
            </p>
            <p id="date">Jan. 2017</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    );
  }
}

export default StudentTestimonySection;
