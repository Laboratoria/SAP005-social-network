export const onNavigate = (path, state = {}) => {
  window.history.pushState(
    state,
    null,
<<<<<<< HEAD
    path,
  );

  const popStateEvent = new PopStateEvent('popstate', { state });
=======
    path
  );

  const popStateEvent = new PopStateEvent('popstate', { state: state });
>>>>>>> 17d980f2eb022ce9d1bed1329d50b232deddb0af
  dispatchEvent(popStateEvent);
};
