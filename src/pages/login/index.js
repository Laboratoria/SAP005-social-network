import { Google, Facebook } from '../../services/index.js';

import { renderPage } from '../../router.js';

export const Login = () => {
  // Coloque sua página
  const btnGoogle = `
    <section class="login">
      <img class="img-logo"  src="../img/Logo.jpeg" alt="logo da  página">
      <button class="btn-Google" id="btnGoogle">Fazer login com o Google</button>
      <button class="btn-Facebook" id="btnFacebook">Fazer login com o Facebook</button>
    </section>
  `;

  const rootElement = document.createElement('div');
  rootElement.innerHTML = btnGoogle;

  const loginGoogle = rootElement.querySelector('#btnGoogle');

  loginGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    Google().then(() => {
      // const token = result.credential.accessToken;
      // const user = result.user;
      window.history.pushState(null, null, '/home');
      renderPage();
    }).catch(() => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
    });
  });

  const loginFacebook = rootElement.querySelector('#btnFacebook');

  loginFacebook.addEventListener('click', (event) => {
    event.preventDefault();
    Facebook().then(() => {
      // const token = result.credential.accessToken;
      // const user = result.user;
      window.history.pushState(null, null, '/home');
      renderPage();
    }).catch(() => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
    });
  });

  return rootElement;
};
