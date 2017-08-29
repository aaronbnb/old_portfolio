import React from 'react';
import {withRouter, Link, browserHistory, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.linkAndToggle = this.linkAndToggle.bind(this);

  }

  componentDidMount() {
    this.props.fetchBlogs();
  }

  linkAndToggle(path) {
    return e => {
      console.log(path);
      this.props.toggle(path);
      hashHistory.push(path);
    };
  }

  render() {
    console.log(this.props);
    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

        <button className="navbar-toggler navbar-toggler-left" id="cmon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>

        <a className="navbar-brand" href="#" id="logo">
          <img src="http://res.cloudinary.com/dn4jhnh54/image/upload/v1503777268/aaron-logo1_qxqqek.png" width="40" height="40"
            className="d-inline-block align-top"
            alt="Aaron Farber logo which is a pyramid made up of vertical stripes"/>
          <span id="name">Aaron Farber</span>
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <div className='expand-effect'>

            <ul className="nav navbar-nav">
              <li><Link to={"dev"}>&nbsp;Developer &nbsp;<span className="sr-only">(current)</span></Link></li>
              <li onClick={this.linkAndToggle("dev")}><a href="#">&nbsp;Teacher &nbsp;</a></li>
              <li><a href="#">&nbsp;Resume &nbsp;</a></li>
              <li><a href="#">&nbsp;Musings &nbsp;</a></li>
            </ul>

          </div>

        </div>

      </nav>
    );

  }
}

export default NavBar;

//
// <div className='moac-container'>
//   <nav className="navbar navbar-default">
//     <div className="container-fluid">
//       <div className="navbar-header">
//
//         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//           <span className="sr-only">Toggle navigation</span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <Link className="navbar-brand" href="#"></Link>
//
//       </div>
//       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//         <div className="choice-box">
//           <div className='expand-effect'>
//             <ul className="nav navbar-nav">
//
//               <li><a href="#">&nbsp;Developer &nbsp;<span className="sr-only">(current)</span></a></li>
//               <li><a href="#">&nbsp;Teacher &nbsp;</a></li>
//               <li><a href="#">&nbsp;Resume &nbsp;</a></li>
//               <li><a href="#">&nbsp;Musings &nbsp;</a></li>
//
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </nav>
// </div>
