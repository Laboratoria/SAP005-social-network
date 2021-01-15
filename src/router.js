import { Home } from './pages/home/index.js';
import { Register } from './pages/register/index.js';
import { Post } from './pages/post/index.js';
import { Profile } from './pages/profile/index.js';
import { logOut } from './services/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Home,
    '/register': Register,
    '/post': Post,
    '/profile': Profile,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('post')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/post');
    });
  document
    .getElementById('profile')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/profile');
    });
  document
    .getElementById('logOut')
    .addEventListener('click', (e) => {
      e.preventDefault();
      logOut();
      onNavigate('/');
    });

  routeRender();
});
