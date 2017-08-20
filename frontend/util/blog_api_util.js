export const createBlog = blog => (
  $.ajax({
    method: 'POST',
    url: '/blogs',
    data: {blog}
  })
);

export const destroy = blog => (
  $.ajax({
    method: 'DELETE',
    url: `/blogs/${blog.id}`,
    data: { blog }
  })
);

export const fetchBlogs = blogs => (
  $.ajax({
    method: 'GET',
    url: "/blogs"
  })
);

export const fetchBlog = id => (
  $.ajax({
    method: 'GET',
    url: `/blogs/${id}`
  })
);
