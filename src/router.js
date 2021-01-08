import { login } from './pages/login/index.js';
import { feed } from './pages/feed/index.js';
import { signUp } from './pages/signUp/index.js';
import { onNavigate } from './utils/history.js'; 


const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : login,
  //  '/signUp': signUp,
    '/feed': feed,
// /nova "página" : nova,
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
    });
  // document
  //   .getElementById('signUp')
  //   .addEventListener('click', (e) => {
  //     e.preventDefault();
  //     onNavigate('/signUp')
  //   });

  document
    .getElementById('feed')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/feed')
    });  

  routeRender();
});

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
// });