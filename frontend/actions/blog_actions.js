import * as BlogAPIUtil from './../util/blog_api_util';

export const RECEIVE_BLOG = 'RECEIVE_BLOG';
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';
import { hashHistory } from 'react-router';

export const createBlog = blog => dispatch => {
  return (BlogAPIUtil.createBlog(blog)
  .then( newBlog => {
    dispatch(receiveBlog(newBlog));
  }),
  errors => dispatch(receiveBlogErrors(errors.responseJSON)));
};

export const fetchBlogs = () => dispatch => (
  BlogAPIUtil.fetchBlogs()
  .then( blogs => dispatch(receiveBlogs(blogs)))
);

export const deleteBlog = id => dispatch => (
  BlogAPIUtil.destroy(id)
  .then( updatedBlog => dispatch(receiveBlog(updatedBlog)),
  errors => dispatch(receiveBlogErrors(errors.responseJSON)))
);

export const fetchBlog = id => dispatch => (
  BlogAPIUtil.fetchBlog(id)
  .then( blog => dispatch(receiveBlog(blog)))
);


const receiveBlog = blog => ({
  type: RECEIVE_BLOG,
  blog
});

const receiveBlogs = blogs => ({
  type: RECEIVE_BLOGS,
  blogs
});


const receiveBlogErrors = errors => ({
  type: RECEIVE_BLOG_ERRORS,
  errors
});
