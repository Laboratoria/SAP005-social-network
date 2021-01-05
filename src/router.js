// Este é seu ponto de entrada da sua aplicação
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';
import { Subscribe } from './pages/subscribe/index.js';
import { Feed } from './pages/feed/index.js';
import { loginFeed } from './pages/login/login.js';

/*const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
   // '/' : Home,
    '/login': Login,
    '/subscribe': Subscribe, 
    '/feed' : Feed
  };

  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
 
  document
    .getElementById('subscribe')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/subscribe');
      document.getElementById('logo-name').style.display = "none"
      authentication()
    });
  routeRender();
});
*/
