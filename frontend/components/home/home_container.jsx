import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blog_actions';
import Home from './home';


const mapStateToProps = state => ({
  blogs: state.blogs
});

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
