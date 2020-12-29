// Este é seu ponto de entrada da sua aplicação
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';
import { Subscribe } from './pages/subscribe/index.js';
import { Feed } from './pages/feed/index.js';


const routeRender = () => {
  const rootDiv = document.getElementById('root');
  const routes = {
    '/' : Home,
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
    .getElementById('home')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/')
      document.getElementById('logo-name').style.display = "none"
    });
  document
    .getElementById('login')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/login')
      document.getElementById('logo-name').style.display = "none"
      document.getElementById('button-login')

      .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/feed')
      document.getElementById('header-document').style.display = "none"
      document.getElementById('root').style.width = "100%"
      
      }); 
    });
  document
    .getElementById('subscribe')
    .addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/subscribe');
      document.getElementById('logo-name').style.display = "none"

      document.getElementById('subscribe-button').addEventListener("click", saveData)
        function saveData(){
           let email = document.getElementById('new-email').value;
           let password = document.getElementById('new-password').value;

         firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
         console.log('usuário', user) 
      })}
    });
  routeRender();
});

