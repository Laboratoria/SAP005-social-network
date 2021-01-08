import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Feed } from './pages/feed/index.js';
import { Profile } from './pages/profile/index.js';
import { Notification } from './pages/notification/index.js';
import { Message } from './pages/message/index.js';
import { Registry } from './pages/registry/index.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  
  const routes = {
    '/': Home,
    '/login': Login,
    '/feed': Feed,
    '/profile': Profile,
    '/notification': Notification,
    '/message': Message,
    '/registry': Registry,
  };

  const auth = firebase.auth();
  let path = window.location.pathname;

  auth.onAuthStateChanged((user) => {
    
    if (!user && (path !== '/login' && path !== '/registry')) {
      path = '/';
      window.history.replaceState(null, null, path);
    }
    if (user && (path === '/' || path === '/login' || path === '/registry')) {
      path = '/feed';
      window.history.replaceState(null, null, path);
    }

    rootDiv.innerHTML = '';
    rootDiv.appendChild(routes[path]());
  });
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  routeRender();
  });