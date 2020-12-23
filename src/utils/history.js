export const onNavigate = (path, state = {}) => {
  window.history.pushState(
    state,
    null,
    path,
  );

  const popStateEvent = new PopStateEvent('popstate', { State: state });
  dispatchEvent(popStateEvent);
};
