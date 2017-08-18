import { combineReducers } from 'redux';

import BlogReducer from './blog_reducer';
import CommentReducer from './comment_reducer';


const rootReducer = combineReducers({
  comment: CommentReducer,
  blogs: BlogReducer
});

export default rootReducer;
