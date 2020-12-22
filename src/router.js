import { Register } from './pages/register/index.js';
import { Login } from './pages/login/index.js';
import { onNavigate } from './utils/history.js';

<<<<<<< HEAD
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
=======

const routeRender = () => {
    const rootDiv = document.getElementById('root');
    const routes = {
        "/": Login,
        "/cadastro": Register

    };

    rootDiv.innerHTML = '';
    rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
    // document
    //     .getElementById('home')
    //     .addEventListener('click', (e) => {
    //         e.preventDefault();
    //         onNavigate('/')
    //     });
    // document
    //     .getElementById('login')
    //     .addEventListener('click', (e) => {
    //         e.preventDefault();
    //         onNavigate('/login')
    //     });

    routeRender();
});


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
>>>>>>> a6729b012006293b49d01b0d9bdbd219c4f58af8
