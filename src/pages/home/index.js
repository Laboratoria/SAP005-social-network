import { onNavigate } from '../../utils/history.js';

export const Home = () => {
  const home = document.createElement('div');
  home.classList.add('form-container');
  home.innerHTML = `
  <div class='form-login'>
    <div class='header-container'>
      <figure class='logo'><img src='./assets/logo/runners-360px.png' alt='Logo Runners' id='logo'></figure>
        <h2>Olá!</h2>
        <p>Conecte-se ou crie sua conta na Runners e compartilhe seus desafios com outros corredores.</p>
        <hr />
      </div>
      <div><h2>Login com Google</h2></div>
      <div class="row clearfix">
      <div class="col_half">
      <div class="btn google" id='authGoogle'><a href="#"><span><i class="fab fa-google" aria-hidden="true"></i></span>Entrar com Google</a></div>
      <div class="btn rg"><a href="/register"><span><i class="fas fa-user-circle" aria-hidden="true"></i></span>Criar nova conta</a></div>
      </div>
      <div class="col_half last">
        <form>
        <h3 class='error' id='msgError'></h3>
          <div class="input_field"><span><i class="far fa-envelope" aria-hidden="true"></i></span>
            <input type="email" id='email-input' name="email" placeholder="Email" required=""/>
          </div>
          <div class="input_field"><span><i class="fa fa-lock" aria-hidden="true"></i></span>
            <input type="password" id='password-home' placeholder="Password" required=""/>
          </div>
          <input class="button" id='submit-home' type="submit" value="Entrar"/> 
          </div>
        </form>
      </div>
    </div>
  </div>
`;

  const btn = home.querySelector('#submit-home');
  const autGoogle = home.querySelector('#authGoogle');
  const email = home.querySelector('#email-input');
  const password = home.querySelector('#password-home');

  const userHome = firebase.auth().currentUser;

  // Conectar um usuário com endereço de e-mail e senha
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
        if (userHome !== null) {
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
          displayName: firebase.auth().currentUser.displayName,
          email: firebase.auth().currentUser.email,
          phoneNumber: firebase.auth().currentUser.phoneNumber,
          photoUrl: firebase.auth().currentUser.photoURL,
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
