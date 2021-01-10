// import { createAccount} from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const SignUp = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <div id = "firebaseui-auth-container" class = "container-login">
      <div class='box-item'><h1>S E C U R I T Y  PET</h1></div>
      <img src='../img/pessoas.png' alt='Logotype' class='icon-large'>
      <div class='box-item'>
        <h3>CRIAR UMA NOVA CONTA</h3>
        // <form method='post'>
        <form>
          <input type="text" placeholder="Insira seu nome" id="username" class='login-area'><br>
          <input type="email" placeholder="Insira um email" id="register-email" class="login-area"><br>
          <input type="password" placeholder="Insira uma senha" id="register-password" class="login-area"><br><br>
          <button class="btn button-area" id="button-register">Cadastre-se</button>
        </form>
      </div>
    </div>
  `;

  const email = rootElement.querySelector('#register-email');
  const password = rootElement.querySelector('#register-password');
  const signUpButton = rootElement.querySelector('#button-register');
  signUpButton.addEventListener('click', () => {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
  });
  const linkLogin = rootElement.querySelector('#button-register');
  linkLogin.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/feed');
  });

  return rootElement;
};
