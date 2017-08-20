import * as CommentAPIUtil from './../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
import { hashHistory } from 'react-router';

export const createComment = comment => dispatch => {
  return (CommentAPIUtil.createComment(comment)
  .then( newComment => {
    dispatch(receiveComment(newComment));
  }),
  errors => dispatch(receiveCommentErrors(errors.responseJSON)));
};

export const fetchComments = () => dispatch => (
  CommentAPIUtil.fetchComments()
  .then( comments => dispatch(receiveComments(comments)))
);

export const deleteComment = id => dispatch => (
  CommentAPIUtil.destroy(id)
  .then( updatedComment => dispatch(receiveComment(updatedComment)),
  errors => dispatch(receiveCommentErrors(errors.responseJSON)))
);

export const fetchComment = id => dispatch => (
  CommentAPIUtil.fetchComment(id)
  .then( comment => dispatch(receiveComment(comment)))
);


const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});


const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});
