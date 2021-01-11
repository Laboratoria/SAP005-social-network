import { Login } from './pages/login/index.js';
import { generalFeed } from './pages/generalFeed/index.js';
import { SignUp } from './pages/singnUp/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Login,
    '/generalFeed': generalFeed,
    '/signup': SignUp,
  };
  rootDiv.innerHTML = '';
  if (!routes[window.location.pathname]) {
    window.location.pathname = '/';
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/');
    });
  document
    .getElementById('start')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/generalFeed');
    });
  routeRender();
});
routeRender();
