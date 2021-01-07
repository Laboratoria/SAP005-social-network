// Este é seu ponto de entrada da sua aplicação
import { Register } from './pages/register/index.js';
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import {Timeline} from './pages/timeline/index.js';
import { onNavigate } from './utils/history.js';


const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home,
    '/login': Login,
    '/register': Register,
    '/timeline': Timeline,

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
      onNavigate('/login')
    });
    document
    .getElementById('register')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/register');
    });
    document
    .getElementById('timeline')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/timeline')
    });

  routeRender();
});
