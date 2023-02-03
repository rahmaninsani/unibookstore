const defaultProps = {
  // page in src/views/pages
  page: '',

  // props to pass to page
  props: {
    title: '',
    data: {},
    error: '',
  },
};

const render = (res, options) => {
  res.render('index', {
    ...defaultProps,
    ...options,
  });
};

module.exports = render;
