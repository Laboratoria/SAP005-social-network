// Este é seu ponto de entrada da sua aplicação
import { onNavigate } from './utils/history.js';
import { Feed } from './pages/feed/index.js';
import { Home } from './home.js';
import { logOut } from './pages/feed/feed.js';
import { emailLogin } from './pages/login/login.js';

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
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) { 
          document.getElementById('inicial-page').style.display = "none";
          document.getElementById('root').style.width = "100%"
          onNavigate('/feed');
          logOut();      
       } 
       else {
         document.getElementById('inicial-page').style.display = "block";
       }
      }) 
  routeRender();
});
