import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blog_actions';
import Home from './home';


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return ({
    background: 'stars',
    blogs: state.blogs
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
