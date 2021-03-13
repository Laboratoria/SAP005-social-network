/* eslint-disable import/named */
import { onNavigate } from '../../utils/history.js';
import {
  loginWithEmail, loginGoogle, createuser, currentUser,
} from '../../services/index.js';

export const Home = () => {
  const home = document.createElement('div');
  home.classList.add('container');
  home.innerHTML = `
  <div class='form-login'>
  <div class='header-container'>
    <figure class='logo'><img src='./assets/logo/runners-360px.png' alt='Logo Runners' id='logo'></figure>
    <h1>Olá!</h1>
    <p class='about'>Conecte-se e compartilhe seus desafios com outros corredores.</p>
    <hr />
  </div>
  <div>
    <h2 class='about'>Login</h2>
  </div>
  <div class="row clearfix">
    <div class="col_half">
      <div class="btn google" id='authGoogle'><a href="#"><span><i class="fab fa-google" aria-hidden="true"></i></span>Entrar com Google</a></div>
      <div class="btn rg"><a href="/register"><span><i class="fas fa-user-circle" aria-hidden="true"></i></span>Criar nova conta</a></div>
    </div>
    <div class="col_half last">
      <form>
        <h3 class='error' id='msgError'></h3>
        <div class="input_field"><span><i class="far fa-envelope" aria-hidden="true"></i></span>
          <input type="email" id='email-input' name="email" placeholder="Digite seu e-mail" required />
        </div>
        <div class="input_field"><span><i class="fa fa-lock" aria-hidden="true"></i></span>
          <input type="password" id='password-home' placeholder="Digite sua senha" required />
        </div>
        <div>
          <input class="button" id='submit-home' type="submit" value="Entrar"/> 
        </div>
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
  const msgError = home.querySelector('#msgError');
  const userHome = currentUser();

  // Conectar um usuário com endereço de e-mail e senha
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithEmail(email.value, password.value)
      .then(() => {
        if (userHome !== null) {
          onNavigate('/post');
        } else {
          const notLogin = ('Usuario não está logado');
          msgError.innerHTML = notLogin;
        }
      })
      .catch((error) => {
        let codeError = error.code;
        if (codeError === 'auth/user-not-found') {
          codeError = error.message;
        } else if (codeError === 'auth/wrong-password') {
          codeError = error.message;
        }
        msgError.innerHTML = codeError;
      });
  });

  // Autenticação do Google
  autGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle()
      .then(() => {
        createuser();
      })
      .then(() => {
        onNavigate('/post');
      })
      .catch((error) => {
        msgError.innerHTML = error.message;
      });
  });

  return home;
};
