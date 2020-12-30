// import { } from './data.js';
import { Google, Facebook,Email} from '../../services/index.js';
// import { renderPage } from '../../router.js';

import { renderPage } from '../../router.js';

export const Login = () => {
  // Coloque sua página
  const btnGoogle = `
    <section class="login">
      <img class="img-logo"  src="../img/Logo.jpeg" alt="logo da  página">
      <form>
        <div>
          <input type="email" id="inputEmail" placeholder="Email"/>
        </div>
        <div>
          <input type="password" id="inputSenha"  placeholder="Senha"/>
        </div>
          <button id="btnEmail">Entrar</button>
          <p> Ou entre com...</p>
      </form>
      <button id="btnGoogle">Google</button>
      <button id="btnFacebook">Facebook</button>
      <p>Não tem uma conta?<p/>
     
      <button id="criarCadastro">Cadastre-se</button>

      
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

 

  const loginEmail = rootElement.querySelector('#btnEmail');

  loginEmail.addEventListener('click', (event) => {
    event.preventDefault();
    let email = document.getElementById('inputEmail').value;
    let senha = document.getElementById('inputSenha').value;
    Email(email,senha).then(() => {
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

  const irParaPaginaCadastro = rootElement.querySelector('#criarCadastro');

  irParaPaginaCadastro.addEventListener('click', (event) => {
    event.preventDefault();

    window.history.pushState(null, null, '/cadastro');
    renderPage();

  });

  return rootElement;
};

