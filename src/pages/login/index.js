import { emailAndPasswordLogin } from '../../services/index.js';
import { googleLogin } from '../../services/index.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.className = 'container';

  rootElement.innerHTML = `
      <header>
        <h2 class="title-login">Nome do app</h2>
      </header>
      <section>
        <form class="form-login" id="form>
        <label class="label-enter">Entrar</label>
        <label class="label-login">E-mail</label>
        <input type="email" class="input-login" id="email-login" name="email-login" required>
        <label class="label-login">Senha</label>
        <input type="password" class="input-login" id="password-login" minlength="8" name="password-login" required>
        <button type="submit" class="btn-login" id="btn-login">Entrar</button>
        <label class="alternative">Ou</label>
        <button id="btn-google">
          <img class="btn-login-icon" src="../../img/google-icon.svg" alt="Google icon"/>
          <span class="btn-login-text">Sign in with Google</span>
        </button>
        </form>
      </section>
      <p class="register-login">
        Ainda não tem uma conta? <a href="#">Registrar-se</a>
      </p>
  `;

  const googleButton = rootElement.querySelector('#btn-google');
  googleButton.addEventListener('click', googleLogin);

  const loginButton = rootElement.querySelector('#btn-login');
  loginButton.addEventListener('click', emailAndPasswordLogin);

  return rootElement;
};

