import { registerLogin } from './data.js';

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
      <input required="required" autocomplete="off" type="text" placeholder="Insira seu nome" id="username" class='login-area'>
      <input required="required" autocomplete="off" type="email" placeholder="example@example.com" id="register-email" class="login-area">
      <input required="required" autocomplete="off" type="password" placeholder="Insira uma senha (Min. 6 digítos)" id="register-password" class="login-area">
      </div>
      <button class="btn button-area" id="button-register">Cadastre-se</button>
       </form>
</div>

`;

  const email = rootElement.querySelector('#register-email');
  const password = rootElement.querySelector('#register-password');
  const registerBtn = rootElement.querySelector('#button-register');
  const name = rootElement.querySelector('#username');

  registerBtn.addEventListener('click', (event) => {
    event.preventDefault();
    registerLogin(email.value, password.value,
      name.value);
  });

  return rootElement;
};
