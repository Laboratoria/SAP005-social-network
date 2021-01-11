// import { createAccount} from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const SignUp = () => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('class', 'box');
  rootElement.innerHTML = `
  <div class='box-item'>
  <h1><img src='../../img/logo.png' alt='Logo Type' class='logos-home'></h1>
  <img src='../../img/pessoas.png' alt='Logo Pessoas' class='logos-home'>

</div>

  <div class='box-item'>
    <h3>CRIAR UMA NOVA CONTA</h3>
    <form method='post'>
      <input type="text" placeholder="Insira seu nome" id="username" class='login-area'>
      <input type="email" placeholder="Insira um email" id="register-email" class="login-area">
      <input type="password" placeholder="Insira uma senha" id="register-password" class="login-area">
      <div class="error-message" id="singup-error">
      </div>
      <button class="btn button-area" id="button-register">Cadastre-se</button>
      <button class="btn button-area" id="button-login">Entrar</button>
    </form>
</div>

`;

  const emailButton = rootElement.querySelector('#register-email');
  const passwordButton = rootElement.querySelector('#register-password');
  const registerButton = rootElement.querySelector('#button-register');

  registerButton.addEventListener('click', () => {
    console.log('oi');
    firebase.auth().createUserWithEmailAndPassword(emailButton.value, passwordButton.value);
    console.log(emailButton.value);
    console.log(passwordButton.value);
  });

  const linkLogin = rootElement.querySelector('#button-login');
  linkLogin.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/');
  });

  return rootElement;
};
