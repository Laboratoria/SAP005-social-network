import { registro } from '/services/index.js';

export const Registry = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
     <div class="container-login dysplay-template">
         <div class="box-login">
             <img src="images/olimpo.png" class="login-icon"> 
             <form  id ="formLogin" class="login">
                 <h1 >Registre-se!</h1>
                 <input  class="btn"  type="name" placeholder="Digite seu nome" >
                 <input id="txtEmail" class="btn" type="email" placeholder="Email" >
                 <input id="txtPassword" class="btn" type="password" placeholder="Senha de no mínimo 6 caracteres" autocomplete="off" >   
                 <button id="login-btn" class="buttonPage"> Criar conta </button>
             </form>
         </div>
     <div>
    `;

  const txtEmail = rootElement.querySelector('#txtEmail');
  const txtPassword = rootElement.querySelector('#txtPassword');
  const btnLogin = rootElement.querySelector('#login-btn');

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    // pegando os valores do email e senha
    const email = txtEmail.value;
    const senha = txtPassword.value;
    registro(email, senha);
  });

  return rootElement;
};
