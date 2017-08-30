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
          <ul className="skill-list">
            <li className="skill-list-item">HTML</li>
            <li className="skill-list-item">CSS</li>
            <li className="skill-list-item">JavaScript</li>
            <li className="skill-list-item">Ruby On Rails</li>
            <li className="skill-list-item">React/Redux</li>
            <li className="skill-list-item">React Native</li>
            <li className="skill-list-item">SQL</li>
            <li className="skill-list-item">Web Accessibility</li>
            <li className="skill-list-item">Webpack</li>
            <li className="skill-list-item">Bootstrap</li>
            <li className="skill-list-item">Google Cloud</li>
            <li className="skill-list-item">D3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dev;
