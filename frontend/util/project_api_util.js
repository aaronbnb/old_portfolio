export const createProject = project => (
  $.ajax({
    method: 'POST',
    url: '/projects',
    data: {project}
  })
);

export const destroy = project => (
  $.ajax({
    method: 'DELETE',
    url: `/projects/${project.id}`,
    data: { project }
  })
);

export const fetchProjects = projects => (
  $.ajax({
    method: 'GET',
    url: "/projects"
  })
);

export const fetchProject = id => (
  $.ajax({
    method: 'GET',
    url: `/projects/${id}`
  })
);
