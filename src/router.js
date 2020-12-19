import { Register } from './pages/register/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';

const root = document.querySelector("#root");

const routers = {
    "/": Login,
    "/cadastro": Register
}

const renderRouter = () => {
    root.innerHTML = "";
    if (!routers[window.location.pathname]) {
        window.location = '/'
    } else {
        root.appendChild(routers[window.location.pathname]());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderRouter();
})