  export function addTextToBody(text) {
    const div = document.createElement('div');
     div.textContent = text;
     document.body.appendChild(div);
  }
  
export const onNavigate = (path, state = {}) => {
  window.history.pushState(
    state,
    null,
    path
  );

  const popStateEvent = new PopStateEvent('popstate', { state: state });
  dispatchEvent(popStateEvent);
};
