import { onNavigate } from '../../utils/history.js';
import { loginPrincipal, loginGoogle } from '/services/index.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <div class="container-login dysplay-template">
      <div class="box-login">
       <img src="images/olimpo.png" class="login-icon"> 
       <form  id ="formLogin" class="login">
         <input id="txtEmail" class="btn" type="text"  placeholder="Email" >
         <input id="txtPassword" class="btn" type="password" placeholder="Senha" autocomplete="off" >     
         <p>Esqueceu sua senha ?<a href="images/construc.gif" target="_blank">Clique aqui.</a>
         <p>
         <button id="signup-btn" class="buttonPage"> Login </button><br>
         <button id="googleLogin" class="buttonPage btnGoogle"> <img src="images/google.png" class="login-icon"> Login Google </button>
         <button id="registry" class="buttonPage btnSing"> Registre-se </button>
       </form>
     <div>
  `;

  const bottunRegistry = rootElement.querySelector('#registry');
  bottunRegistry.addEventListener('click', () => {
    onNavigate('/registry');
  });

  const txtEmail = rootElement.querySelector('#txtEmail');
  const txtPassword = rootElement.querySelector('#txtPassword');
  const btnSignUp = rootElement.querySelector('#signup-btn');

  btnSignUp.addEventListener('click', (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const senha = txtPassword.value;
    loginPrincipal(email, senha);
  });

  const btnGoogle = rootElement.querySelector('#googleLogin');
  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    loginGoogle();
  });

  return rootElement;
};
