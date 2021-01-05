import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { About } from './pages/about/index.js';
import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home,
    '/login': Login,
    '/about': About,
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
      onNavigate('/')
    });
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/login')
    });
  document
    .getElementById('about')  
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/about')
    });
  routeRender();
});
routeRender();