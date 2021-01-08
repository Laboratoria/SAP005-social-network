import { signIn, loginWithGoogle } from './data.js';
import { errorCodes } from './constants.js';

export  const  Login  =  ( )  =>  {
  const  rootElement  =  document . createElement ( 'div' ) ;
  rootElement . innerHTML  =  `

      <div id = "firebaseui-auth-container" class = "container-login">

      <div class='box-item'><h1>S E C U R I T Y  PET</h1>
      <img src ="./ img / pessoas.png"  alt='Logotype' class='icon-large'>
      </div><br>

      <div class='box-item'>

      <h3>WELCOME TO SECURITY PET</h3>

      <form method='post'>
      <input type='email' placeholder='Email' id='emailArea' class='login-area'><br>
      <input type='password' placeholder='Senha' id='passwordArea' class='login-area'><br><br>
      </form>

      <div class="inerror-message" id="error-login">
      </div>

      <button class='button-area btn signIn'>Entrar</button>
      <p class="ou">━━━━━━━━━ OU ━━━━━━━━━</p>

      <button class='button-area btn btnGoogle'>Acesse com <img src='./ img /google-icon.png' alt='Google' class='google-icon'></button><br><br><br>
      <p class='font-small'>Se não tem um conta, <a href='/#signup'>registre-se aqui.</a></p>

      </div>
  `;

    const googleButton = containerLogin.querySelector('.btnGoogle');
    const signInButton = containerLogin.querySelector('.signIn');
    const errorLogin = containerLogin.querySelector('#error-login');

    
    const onError = (error) => {
      if (errorCodes[error.code]) {
        errorLogin.innerHTML = errorCodes[error.code];
      } else {
        errorLogin.innerHTML = errorCodes.DEFAULT_MESSAGE;
      }
    };

    signInButton.addEventListener('click', (event) => {
      event.preventDefault();
      signIn(containerLogin.querySelector('#emailArea').value, containerLogin.querySelector('#passwordArea').value, onError);
    });

    googleButton.addEventListener('click', () => {
      loginWithGoogle();
    });

  //return index.appendChild(containerLogin);
  return rootElement;
};
