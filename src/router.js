import { Register } from './pages/register/index.js';
import { Login } from './pages/login/index.js';
import { Home } from './pages/home/index.js'

const routeRender = () => {
    const rootDiv = document.getElementById('root');
    const routes = {
        "/": Login,
        "/cadastro": Register,
        "/home": Home,
    };
    if (!routes[window.location.pathname]) {
        window.location = '/'
    } else {
        root.appendChild(routes[window.location.pathname]());
    }
    rootDiv.innerHTML = '';
    rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
    routeRender();
});

// const user = await firebase.auth().currentUser
// if(user != null){
// onNavigate('/home')
// } else {
//     rootElement.querySelector("#notFound").innerHTML =
//      ` <h1>Ops, faça um login!.</h1>`
// }


// const renderRouter = () => {
//     root.innerHTML = "";
//     if (!routers[window.location.pathname]) {
//         window.location = '/'
//     } else {
//         root.appendChild(routers[window.location.pathname]());
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     renderRouter();
// })