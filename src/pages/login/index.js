import { signIn, loginWithGoogle } from './data.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="box">
    
     <div class='box-item1'>
      <div><img src='./img/logo.png' alt='Logotype' class='logo' /></div>
      <div><img src='./img/pessoas.png' alt='Logotype' class='icon-large' /></div>
     </div>

      <div class='box-item'>
      <h3>WELCOME </h3>

        <form method='post'>
          <input type='email' placeholder='Email' id='emailArea' class='login-area'><br>
          <input type='password' placeholder='Senha' id='passwordArea' class='login-area'><br><br>
        </form>
          <div class="inerror-message" id="error-login"> </div>
          <button class='button-area btn signIn'>Entrar</button>
          <p class="ou">━━━━━━━━━ OU ━━━━━━━━━</p>
          <button class='button-area btn btnGoogle'>Acesse com <img src='./img/google-icon.png' alt='Google' class='google-icon'></button><br><br><br>
          <p class='font-small'>Se não tem um conta, <a href='/#signup' style="color:black;font-weight: 600" id='sign-up-login'>REGISTRE-SE.</a></p>  
      </div>
  </div>
  `;

  const googleButton = rootElement.querySelector('.btnGoogle');
  googleButton.addEventListener('click', () => {
    loginWithGoogle();
  });

  const signInButton = rootElement.querySelector('.signIn');
  signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    signIn(
      rootElement.querySelector('#emailArea').value,
      rootElement.querySelector('#passwordArea').value,
    );
  });
  const linkSignUp = rootElement.querySelector('#sign-up-login');
  linkSignUp.addEventListener('click', (event) => {
    event.preventDefault();
    onNavigate('/signup');
  });

  return rootElement;
};
