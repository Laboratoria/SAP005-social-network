export const onNavigate = (path, state = {}) => {
  window.history.pushState(state, null, path);
};
