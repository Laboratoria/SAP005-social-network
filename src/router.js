import { Home } from './pages/home/index.js';
import { Feed } from './pages/feed/index.js';
import { onNavigate } from './utils/history.js';
import { Register } from './pages/register/index.js';
import { Login } from './pages/login/index.js';
import { Profile } from './pages/profile/index.js';

const root = document.querySelector('#root');

const routes = {
  '/': Home,
  '/feed': Feed,
  '/login': Login,
  '/register': Register,
  '/profile': Profile,
};

const renderRoute = () => {
  root.innerHTML = '';
  root.appendChild(routes[window.location.pathname]());
};

document.querySelector('#icon-nav-feed').addEventListener('click', () => {
  onNavigate('/feed');
  renderRoute();
});

document.querySelector('#home').addEventListener('click', () => {
  onNavigate('/');
  renderRoute();
});

document.querySelector('#icon-nav-profile').addEventListener('click', () => {
  onNavigate('/profile');
  renderRoute();
});

window.addEventListener('popstate', () => renderRoute());
window.addEventListener('load', () => renderRoute());
