import { combineReducers } from 'redux';

import BlogReducer from './blog_reducer';
import CommentReducer from './comment_reducer';
import ProjectReducer from './project_reducer';


const rootReducer = combineReducers({
  comments: CommentReducer,
  blogs: BlogReducer,
  projects: ProjectReducer
});

export default rootReducer;
