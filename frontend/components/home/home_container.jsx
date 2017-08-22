import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blog_actions';
import Home from './home';


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return ({blogs: state.blogs,
  stars: ownProps.stars});
};

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
