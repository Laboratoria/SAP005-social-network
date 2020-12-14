const cpf = document.querySelector('#cpf')
const btn = document.querySelector('#btn')

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let typedCpf = cpf.value;
    let replaceCpf = typedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
        (regex, argument1, argument2, argument3, argument4) => {
            return argument1 + '.' + argument2 + '.' + argument3 + '-' + argument4;
        })
    console.log(typedCpf = replaceCpf);
})


// Este é seu ponto de entrada da sua aplicação
// import { Home } from './pages/home/index.js';
// import { Login } from './pages/login/index.js';
// import { onNavigate } from './utils/history.js';

// const routeRender = () => {
//   const rootDiv = document.getElementById('root');
//   const routes = {
//     '/' : Home,
//     '/login': Login,

//   };

//   rootDiv.innerHTML = '';
//   rootDiv.appendChild(routes[window.location.pathname]());
// };

// window.addEventListener('popstate', routeRender);
// window.addEventListener('load', () => {
//   document
//     .getElementById('home')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       onNavigate('/')
//     });
//   document
//     .getElementById('login')
//     .addEventListener('click', (e) => {
//       e.preventDefault();
//       onNavigate('/login')
//     });

//   routeRender();
// });