import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT_ERRORS } from '../actions/comment_actions';

import merge from 'lodash/merge';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newComment = {[action.comment.id]: action.comment};
      return merge({}, state, newComment);
    case RECEIVE_COMMENT_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default CommentReducer;
