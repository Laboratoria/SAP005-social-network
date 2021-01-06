import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <div class="container-login">
    <img class="logo-img" src="./images/logo.jpeg" alt="logo Olimpo">
    <section >

    <h1 class='title' id='homeFeed'>[Olimpo]</h1>

    <h3 class='subtitle'>Entre agora!</h3>
  
    <input id='txtEmail' type='email', placeholder='Email cadastrado'>
    <input id='txtPassword' type='password' placeholder='Senha'>
    <button id='login-btn' class='login-btn'> Entrar </button><br />
    <p> Ainda não possui uma conta? </p>
    <button id= 'signup-btn' class = 'sign-btn'> Registre-se agora mesmo! </button>
    <p> Acesse sua conta pelo Google: </p>  
    <button id= 'googleLogin' class = 'google-login'> Conta Google </button>
    </section>

    <div>

  `;
  const bottunLogin = rootElement.querySelector('#homeFeed');
  bottunLogin.addEventListener('click', () => {
    onNavigate('/services');
  });

  const btnGoogle = rootElement.querySelector('#googleLogin');
  const txtEmail = rootElement.querySelector('#txtEmail');
  const txtPassword = rootElement.querySelector('#txtPassword');
  const btnLogin = rootElement.querySelector('#login-btn');
  const btnSignUp = rootElement.querySelector('#signup-btn');

  // adicionar o evento no login

  btnLogin.addEventListener('click', () => {
    // pegando os valores do email e senha
    const email = txtEmail.value;
    const senha = txtPassword.value;
    const auth = firebase.auth();
    console.log(email, senha);
    // Registrar
    const promise = auth.createUserWithEmailAndPassword(email, senha);
    promise.catch((e) => console.log(e.message));
  });

  // adicionando evento no Sign In - Registre-se

  btnSignUp.addEventListener('click', () => {
    // pegando os valores do email e senha
    const email = txtEmail.value;
    const senha = txtPassword.value;
    const auth = firebase.auth();
    // Entrar
    const promise = auth.signInWithEmailAndPassword(email, senha);
    promise.catch((e) => console.log(e.message));
  });

  btnGoogle.addEventListener('click', () => {
    const proverAcesso = new firebase.auth.GoogleAuthProvider();
    proverAcesso.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithRedirect(proverAcesso);
  });
  return rootElement;
};
