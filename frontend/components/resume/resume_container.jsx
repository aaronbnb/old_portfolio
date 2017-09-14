import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blog_actions';
import Resume from './resume';


const mapStateToProps = (state, ownProps) => {
  return ({
    blogs: state.blogs
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
