import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blog_actions';
import { fetchProjects } from './../../actions/project_actions';
import Teach from './teach';


const mapStateToProps = (state, ownProps) => {
  return ({
    blogs: state.blogs,
    projects: state.projects
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teach);
