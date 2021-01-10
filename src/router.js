import { Login } from './pages/login/index.js';
// import { feed } from './pages/feed/index.js';
import { SignUp } from './pages/signUp/index.js';
// import { onNavigate } from './utils/history.js';

const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/': Login,
    // '/feed': Feed,
    '/signup': SignUp,

  };

  rootDiv.innerHTML = '';
  if (!routes[window.location.pathname]) {
    window.location.pathname = '/';
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  routeRender();
});

//   rootDiv.innerHTML = '';
//   rootDiv.appendChild(routes[window.location.pathname]());
// };

// window.addEventListener('popstate', routeRender);
// window.addEventListener('load', () => {
//   document
//     .getElementById('login')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       onNavigate('/')
//     });
//   document
//     .getElementById('signup')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       onNavigate('/signup')
//     });

//   document
//     .getElementById('feed')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       onNavigate('/feed')
//     });

//   routeRender();
// });

// const init = () => {
//   window.addEventListener('hashchange', () => {
//     switch (window.location.hash) {
//       case '#signup':
//         signUp();
//         break;
//       case '#feed':
//         feed();
//         break;
//       default:
//         login();
//     }
//   });
// };
// init();

// window.addEventListener('load', () => {
//   switch (window.location.hash) {
//     case '#login':
//       login();
//       break;
//     case '#signup':
//       signUp();
//       break;
//     case '#feed':
//       feed();
//       break;
//     default:
//       login();
//   }
//   routeRender();
