import { Register } from './pages/register/index.js';
import { Login } from './pages/login/index.js';
import { Home } from './pages/home/main.js'

const routeRender = () => {
    let myItem = localStorage.getItem("uid");
    const rootDiv = document.getElementById('root');
    const routes = {
        "/": Login,
        "/cadastro": Register,
        "/home": Home,
    };

    if (!routes[window.location.pathname]) {
        window.location = '/'
    } else if (window.location.pathname !== "/" && window.location.pathname !== "/cadastro" && !myItem) {
        window.location = '/'
    } else {
        rootDiv.innerHTML = '';
        root.appendChild(routes[window.location.pathname]());
    }

};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
    routeRender();
});