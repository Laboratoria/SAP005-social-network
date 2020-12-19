// Este é seu ponto de entrada da sua aplicação
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
// import { onNavigate } from './utils/history.js';

const routes = {
  '/home': Home,
  '/': Login
};

const container = document.querySelector('#root');

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => (hash === '' ? '/' : hash.replace('#', ''));

export const renderPage = () => {
  const page = validateHash(window.location.pathname);
  container.innerHTML = '';
  container.appendChild(routes[page]());
};

window.addEventListener('load', () => {
  renderPage();
  init();
});

window.addEventListener('popstate', renderPage);



// const routeRender = () => {
//   const rootDiv = document.getElementById('root');
//   const routes = {
//     '/' : Home,
//     '/login': Login,

//   };

//   rootDiv.innerHTML = '';
//   rootDiv.appendChild(routes[window.location.pathname]());
// };

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
