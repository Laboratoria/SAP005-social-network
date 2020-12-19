import { Google, Facebook } from './data.js';
// import { renderPage } from '../../router.js';


export const Login = () => {
  // Coloque sua página
  const btnGoogle = `
    <section class="login">
      <img class="img-logo"  src="../img/Logo.jpeg" alt="logo da  página">
      <button id="btnGoogle">Fazer login com o Google</button>
      <button id="btnFacebook">Fazer login com o Facebook</button>
    </section>
  `

  const rootElement = document.createElement('div');
  rootElement.innerHTML = btnGoogle;



  const loginGoogle = rootElement.querySelector("#btnGoogle");

  loginGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    Google();
    console.log("funciona botão");
  });

  const loginFacebook = rootElement.querySelector("#btnFacebook");

  loginFacebook.addEventListener('click', (event) => {
    event.preventDefault();
    Facebook();
    console.log("funciona botão");
  });

  return rootElement;
};