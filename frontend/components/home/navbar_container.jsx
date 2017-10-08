import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blog_actions';
import NavBar from './navbar';


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return ({blogs: state.blogs,
  toggle: ownProps.toggle});
};

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
