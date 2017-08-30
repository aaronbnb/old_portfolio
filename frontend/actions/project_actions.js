import * as ProjectAPIUtil from './../util/project_api_util';

export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
import { hashHistory } from 'react-router';

export const createProject = project => dispatch => {
  return (ProjectAPIUtil.createProject(project)
  .then( newProject => {
    dispatch(receiveProject(newProject));
  }),
  errors => dispatch(receiveProjectErrors(errors.responseJSON)));
};

export const fetchProjects = () => dispatch => (
  ProjectAPIUtil.fetchProjects()
  .then( projects => dispatch(receiveProjects(projects)))
);

export const deleteProject = id => dispatch => (
  ProjectAPIUtil.destroy(id)
  .then( updatedProject => dispatch(receiveProject(updatedProject)),
  errors => dispatch(receiveProjectErrors(errors.responseJSON)))
);

export const fetchProject = id => dispatch => (
  ProjectAPIUtil.fetchProject(id)
  .then( project => dispatch(receiveProject(project)))
);


const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});


const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});
