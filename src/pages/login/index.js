export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="container-login">
    <img class="logo-img" src="./images/logo.jpeg" alt="logo Olimpo">
    <section >
    <h1 class='title'>[Olimpo]</h1>
    <h3 class='subtitle'>Entre agora!</h3>
  
    <input id='txtEmail' type='email', placeholder='Email'>
    <input id='txtPassword' type='password' placeholder='Senha'>
    <button id='login-btn' class='login-btn'> Log in </button><br />
  
    <button id= 'signup-btn' class = 'sign-btn'> Registre-se </button>
    <button id = 'logout-btn' class = 'btn btn-action-hide'> Log Out </button>
    </section>
    <div>
    `;
  return rootElement;
};

// pegar os elementos para enviar para o firebase

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('login-btn');
const btnSignUp = document.getElementById('signup-btn');
// const btnLogOut = document.getElementById('logout-btn');

// adicionar o evento no login

btnLogin.addEventListener('click', () => {
  // pegando os valores do email e senha
  const email = txtEmail.value;
  const senha = txtPassword.value;
  const auth = firebase.auth();
  // Entrar
  const promise = auth.signInWithEmailAndPassword(email, senha);
  promise.catch((e) => console.log(e.message));
});

// adicionando evento no Sign In - Registre-se

btnSignUp.addEventListener('click', () => {
  // pegando os valores do email e senha
  const email = txtEmail.value;
  const senha = txtPassword.value;
  const auth = firebase.auth();
  // Registrar
  const promise = auth.createUserWithEmailAndPassword(email, senha);
  promise.catch((e) => console.log(e.message));
});

// export const LoginGoogle = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   provider.setCustomParameters({ prompt: 'select-_account' });
//   firebase.auth().signInWithPopup(provider);
// }
// socorro