// import {register} from './data.js'; 
// import { errorCodes } from '../login/constants.js';

// export const signUp = () => {
//    const  rootElement  =  document . createElement ( 'div' ) ;
//   rootElement . innerHTML  =  `
//     <div id = "firebaseui-auth-container" class = "container-login">
//     <div class='box-item'><h1>S E C U R I T Y  PET</h1>
//     <img src='../img/pessoas.png' alt='Logotype' class='icon-large'>
  
//   </div><br>

  
//   </div><br>
//   <div class='box-item'>
//   <h3>CRIAR UMA NOVA CONTA</h3>
//   <form method='post'>
//   <input type="text" placeholder="Insira seu nome" id="username" class='login-area'><br>
//   <input type="email" placeholder="Insira um email" id="register-email" class="login-area"><br>
//   <input type="password" placeholder="Insira uma senha" id="register-password" class="login-area"><br><br>
//   <div class="error-message" id="singup-error"></div>
//   <button class="btn button-area" id="button-register">Cadastre-se</button>
//   </form>
//   </div>
//   `;

//   const getName = containerSignUp.querySelector('#username');
//   const newRegister = containerSignUp.querySelector('#button-register');
//   const inputEmail = containerSignUp.querySelector('#register-email');
//   const inputPassword = containerSignUp.querySelector('#register-password');
//   const inputError = containerSignUp.querySelector('#singup-error');

//   const onError = (error) => {
//     if (errorCodes[error.code]) {
//       inputError.innerHTML = errorCodes[error.code];
//     } else {
//       inputError.innerHTML = errorCodes.DEFAULT_MESSAGE;
//     }
//   };

//   const newUser = (event) => {
//     event.preventDefault();
//     return register(getName.value, inputEmail.value, inputPassword.value, onError);
//   };
//   newRegister.addEventListener('click', newUser);
//   return index.appendChild(containerSignUp);
// };