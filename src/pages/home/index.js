import { onNavigate } from '../../utils/history.js';

export const Home = () => {
  const home = document.createElement('div');
  home.classList.add('div-home');
  home.innerHTML = `
  <div  id='fundo'></div>
      <figure class='logo'>
      <img src='./assets/logo_runners.png'alt='Logo Runners' id='logo'>
      </figure>
      <div class='home-box'>
        <form class='login'>
          <div class='input-form'>
            <p class='login' alt='Login'>Login</p>
            <h3 class='error' id='msgError'></h3>
            <input type='email' id='email-input' placeholder='@E-mail' required></input>
            <input type='password' id='password-home' placeholder='Senha' required></input>
            <button id='submit-home'>Entrar</button>
            <p class='text'>Logar com:</p>
            <div class='button-social' id='authGoogle'>
            <input type='button' class='google' alt='Logo Google' id='authGoogle'/>
            </div>
          </div>
        </form>
      </div>
      <div class='register-home'>
      <p class='sub-text'>Não tem uma conta? <a href="/register">Cadastre-se</a></p>
      </div>
  `;

  const btn = home.querySelector('#submit-home');
  const autGoogle = home.querySelector('#authGoogle');
  const email = home.querySelector('#email-input');
  const password = home.querySelector('#password-home');

  // Conectar um usuário com endereço de e-mail e senha
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        if (user !== null) {
          onNavigate('/profile');
        } else {
          onNavigate('/profile');
        }
      })
      .catch((error) => {
        let codeError = error.code;
        if (codeError === 'auth/user-not-found') {
          codeError = error.message;
        } else if (codeError === 'auth/wrong-password') {
          codeError = error.message;
        }
        const msgError = home.querySelector('#msgError');
        msgError.innerHTML = codeError;
      });
  });

  // Autenticação do Google
  autGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        const uid = firebase.auth().currentUser.uid;
        const user = {
          photoURL: firebase.auth().currentUser.photoURL,
          displayName: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          phoneNumber: firebase.auth().currentUser.phoneNumber,
        };
        firebase
          .firestore().collection('users').doc(uid).set({ user });
      })
      .then(() => {
        onNavigate('/profile');
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  return home;
};
