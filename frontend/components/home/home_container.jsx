import { connect } from 'react-redux';
import { fetchBlogs } from './../../actions/blog_actions';
import Home from './home';


const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    campaigns: Object.keys(state.campaigns).map(id => state.campaigns[id])
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
