import { Register } from './pages/login/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';

const root = document.querySelector("#root");

const routers = {
    "/login": Login,
    "/cadastro": Register
}

const renderRouter = () => {
    root.innerHTML = "";
    root.appendChild(routers[window.location.pathname]());
}

document.addEventListener('DOMContentLoaded', () => {
    window.history.pushState(null, null, "/login");
    root.appendChild(Login());
})

document.querySelector("#login").addEventListener("click", () => {
    onNavigate("/login");
    renderRouter();
})

document.querySelector("#register").addEventListener("click", () => {
    onNavigate("/cadastro");
    renderRouter();
})

window.addEventListener("popstate", () => {
    renderRouter();
})