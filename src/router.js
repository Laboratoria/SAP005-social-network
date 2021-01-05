// Este é seu ponto de entrada da sua aplicação
import { Feed } from './pages/feed/index.js';
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { SingUp } from './pages/singup/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Home,
    '/login': Login,
    '/singup': SingUp,
    '/feed': Feed,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('home')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/');
    });
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/login');
    });
  document
    .getElementById('singup')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/singup');
    });
  routeRender();
});
