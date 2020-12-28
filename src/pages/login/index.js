import { googleLogin } from '../../services/index.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.className = 'container';

  rootElement.innerHTML = `
      <header>
        <h2 class="title-login">Nome do app</h2>
      </header>
      <section>
        <form class="form-login">
        <label class="label-enter">Entrar</label>
        <label class="label-email">E-mail</label>
        <input type="email" class="email-login">
        <label class="label-password">Senha</label>
        <input type="password" class="password-login">
        <button type="submit" class="btn-login">Entrar</button>
        <label class="alternative">Ou</label>
        <button id="btn-google">
          <img class="btn-login-icon" src="../../img/google-icon.svg" alt="Google icon"/>
          <span class="btn-login-text">Sign in with Google</span>
        </button>
        </form>
      <section>
      <p class="register-login">
        Ainda não tem uma conta? <a href="#">Registrar-se</a>
      </p>
  `;

  const googleButton = rootElement.querySelector('#btn-google');
  googleButton.addEventListener('click', googleLogin);

  return rootElement;
};
