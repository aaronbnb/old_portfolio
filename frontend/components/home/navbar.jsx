import React from 'react';
import {withRouter, Link, browserHistory, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.props.toggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {
    console.log(this.props);
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

        <button className="navbar-toggler navbar-toggler-left" id="cmon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>

        <a onClick={e => this.toggle("home")} className="navbar-brand" href="#" id="logo">
          <img src="http://res.cloudinary.com/dn4jhnh54/image/upload/v1503777268/aaron-logo1_qxqqek.png" width="40" height="40"
            className="d-inline-block align-top"
            alt="Aaron Farber logo which is a pyramid made up of vertical stripes"/>
          <span id="name">Aaron Farber</span>
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className='expand-effect'>

            <ul className="nav navbar-nav">
              <li id="list-item" onClick={e => this.toggle("dev")}><Link to={"dev"}>&nbsp;Developer &nbsp;<span className="sr-only">(current)</span></Link></li>
              <li id="list-item" onClick={e => this.toggle("dev")}><Link to={"dev"}>&nbsp;Teacher &nbsp;</Link></li>
              <li id="list-item"><a href="#">&nbsp;Resume &nbsp;</a></li>
              <li id="list-item"><a href="#">&nbsp;Musings &nbsp;</a></li>
            </ul>

          </div>

        </div>

      </nav>
    );

  }
}

export default NavBar;
