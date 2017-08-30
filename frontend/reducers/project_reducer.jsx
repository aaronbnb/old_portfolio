import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT_ERRORS,
  fetchProjects } from '../actions/project_actions';

import merge from 'lodash/merge';

const projects = fetchProjects();

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      const newProject = {[action.project.id]: action.project};
      return merge({}, state, newProject);
    case RECEIVE_PROJECT_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default ProjectReducer;
