export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/comments',
    data: {comment}
  })
);

export const destroy = comment => (
  $.ajax({
    method: 'DELETE',
    url: `/comments/${comment.id}`,
    data: { comment }
  })
);

export const fetchComments = comments => (
  $.ajax({
    method: 'GET',
    url: "/comments"
  })
);

export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `/comments/${id}`
  })
);
