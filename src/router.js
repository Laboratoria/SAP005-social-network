// Este é seu ponto de entrada da sua aplicação
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';
import {cadastro} from './pages/cadastro/index.js';
import {publicar} from './pages/publicar/index.js';
import {publicacoes} from './pages/publicacoes/index.js';


const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home,
    '/login': Login,
    '/cadastro': cadastro,
    '/publicar': publicar,
    '/publicacoes': publicacoes,
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
    .getElementById('cadastro')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/cadastro')
    });
  
    
  document
    .getElementById('publicar')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/publicar')
    });
  
    document
    .getElementById('publicacoes')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/publicacoes')
    });  
    
  


  routeRender();
});
