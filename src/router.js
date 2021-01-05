// Este é seu ponto de entrada da sua aplicação
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Feed, Profile, Notification, Message } from './services/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');

  const routes = {
    '/': Home,
    '/login': Login,
    '/services': Feed,
    '/services/profile': Profile,
    '/services/notification': Notification,
    '/services/message': Message,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  routeRender();
});