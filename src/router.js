// Este é seu ponto de entrada da sua aplicação
import { onNavigate } from './utils/history.js';
import { Feed } from './pages/feed/index.js';
import { Home } from './home.js';
import { logOut } from './pages/feed/feed.js';

  const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home ,
    '/feed' : Feed
  };
  rootDiv.innerHTML = '';
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
      onNavigate('/')
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) { 
          onNavigate('/feed');
          logOut();
          
       } 
      }) 
  routeRender();
});
