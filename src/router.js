// Este é seu ponto de entrada da sua aplicação
import { home } from './pages/home/index.js';
import { login } from './pages/login/index.js';
// import { onNavigate } from './utils/history.js';

const routes = {
  '/home': home,
  '/': login
};

const container = document.querySelector('#root');

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => (hash === '' ? '/' : hash.replace('#', ''));

const renderPage = () => {
  const page = validateHash(window.location.hash);
  container.innerHTML = '';
  container.appendChild(routes[page]());
};

window.addEventListener('load', () => {
  renderPage();
  init();
});


// const routeRender = () => {
//   const rootDiv = document.getElementById('root');
//   const routes = {
//     '/' : Home,
//     '/login': Login,

//   };

//   rootDiv.innerHTML = '';
//   rootDiv.appendChild(routes[window.location.pathname]());
// };

// window.addEventListener('popstate', routeRender);
// window.addEventListener('load', () => {
//   document
//     .getElementById('home')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       onNavigate('/')
//     });
//   document
//     .getElementById('login')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       onNavigate('/login')
//     });
//   routeRender();
// });
