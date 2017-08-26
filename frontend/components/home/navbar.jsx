import React from 'react';
import {withRouter, Link, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBlogs();
  }

  render() {

    return(
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" id="cmon" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className='expand-effect'>
            <ul className="nav navbar-nav">

              <li><a href="#">&nbsp;Developer &nbsp;<span className="sr-only">(current)</span></a></li>
              <li><a href="#">&nbsp;Teacher &nbsp;</a></li>
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
