// Este é seu ponto de entrada da sua aplicação
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';
import { Subscribe } from './pages/subscribe/index.js';
import { ProfileEdit } from './pages/subscribe/profile-edit.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home,
    '/login': Login,
    '/subscribe/index.js': Subscribe,
    '/subscribe/profile-edit.js': ProfileEdit,

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
    .getElementById('subscribe')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/subscribe/index.js');
      document.getElementById('create-account-button').style.display = "block";
    });
    document
    .getElementById('create-account-button')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/subscribe/profile-edit.js')
      document.getElementById('create-account-button').innerHTML = "Concluir cadastro"
    });
  routeRender();
});

