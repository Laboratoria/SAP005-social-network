import { onNavigate } from "../../utils/history.js"
export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <div class="container-login dysplay-template">
      <div class="box-login">
       <img src="images/olimpo.png" class="login-icon" id='homeFeed'> 
       <form  id ="formLogin" class="login">
         <input id="txtEmail" class="btn" type="text"  placeholder="Email" >
         <input id="txtPassword" class="btn" type="password" placeholder="Senha" autocomplete="off" >     
         <p>Esqueceu sua senha ?<a href="images/construc.gif" target="_blank">Clique aqui.</a>
         <p>
         <button id="login-btn" class="buttonPage"> Login </button><br>
         <button id="googleLogin" class="buttonPage btnGoogle"> <img src="images/google.png" class="login-icon"> Login Google </button>
         <button id="registry" class="buttonPage btnSing"> Registre-se </button>
       </form>
      </div>
    <div>
  `;
  
  const bottunRegistry = rootElement.querySelector('#registry');
  bottunRegistry.addEventListener('click', ()=>{
    onNavigate('/registry');
    ;
  })

  const bottunLogin = rootElement.querySelector('#homeFeed');
  bottunLogin.addEventListener('click', () => {
    onNavigate('/feed');
  })
  const txtEmail = rootElement.querySelector('#txtEmail');
  const txtPassword = rootElement.querySelector('#txtPassword');
  const btnLogin = rootElement.querySelector('#login-btn');
  
  // adicionar o evento no login

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    // pegando os valores do email e senha
    const email = txtEmail.value;
    const senha = txtPassword.value;
    const auth = firebase.auth();
    // Entrar
    const promise = auth.createUserWithEmailAndPassword(email, senha);
    promise.catch((e) => console.log(e.message));
  });

  // adicionando evento no Sign In - Registre-se

  
  return rootElement;

};
