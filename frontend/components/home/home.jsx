import React from 'react';

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
        <div>
          <p>We're here!</p>
        </div>


      </div>
    );

  }
}

export default Home;
