// Este é seu ponto de entrada da sua aplicação
import { onNavigate } from './utils/history.js';
import { Feed } from './pages/feed/index.js';
import { Home } from './pages/inicial-page/about.js';
import { logOut, Post, Reacts, emailLogin, googleLogin, subscribe, userOn } from './services/index.js';


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

      document.getElementById('feedIn').addEventListener("click", (e) =>{
        e.preventDefault()
        emailLogin()
        document.getElementById('boxLogin').style.display = "none";
      })
      userOn();
  routeRender();
});
