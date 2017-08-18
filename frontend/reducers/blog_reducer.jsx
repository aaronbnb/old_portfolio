import {
  RECEIVE_BLOG,
  RECEIVE_BLOGS,
  RECEIVE_BLOG_ERRORS,
  fetchBlogs } from '../actions/blog_actions';

import merge from 'lodash/merge';

const blogs = fetchBlogs();

const BlogReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BLOGS:
      return action.blogs;
    case RECEIVE_BLOG:
      const newBlog = {[action.blog.id]: action.blog};
      return merge({}, state, newBlog);
    case RECEIVE_BLOG_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default BlogReducer;
