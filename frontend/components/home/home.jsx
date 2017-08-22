import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {

    return(
      <div className='moac-container'>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">

              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" href="#"></Link>

            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <div className="choice-box">
                      <div className='cl-effect-1'>
                <ul className="nav navbar-nav">

                  <li><a href="#">&nbsp;Developer &nbsp;<span className="sr-only">(current)</span></a></li>
                  <li><a href="#">&nbsp;Teacher &nbsp;</a></li>
                  <li><a href="#">&nbsp;Resume &nbsp;</a></li>
                  <li><a href="#">&nbsp;Musings &nbsp;</a></li>

                </ul>
                  </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );

  }
}

export default Home;
