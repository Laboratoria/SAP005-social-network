// Este é seu ponto de entrada da sua aplicação
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

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  routeRender();
  });

