import { createRegister } from '../../services/index.js';

export const Register = () => {

  const rootElement = document.createElement('div');
  const templateRegister = `
    <header class="header-register">
      <i class="icon-arrow fas fa-chevron-left"></i>
      <h1 class="title-register">Vamos começar!</h1>
    </header>
    <section>
      <form class="form-register">
        <label class="label-register-name" for="username">Nome</label>
        <input class="input-register-name" type="text" name="username" required>
        <label class="label-register-email" for="email">E-mail</label>
        <input class="input-register-email" type="email" name="email" id="register-email" required> 
        <label class="label-register-password" for"password">Senha</label>
        <input class="input-register-password" type="password" name="password" minlength="8" id="register-password" placeholder="A senha deve conter no mínimo 8 caracteres" required>
        <label class="label-confirm-password" for="confirm-password">Confirmar senha</label>
        <input class="input-confirm-password" type="password" name="confirm-password" minlength="8" id="confirm-password" placeholder="A senha deve conter no mínimo 8 caracteres" required>
        <button class="btn-register" type="submit" id="btn-register">Registrar-se</button>
        <label class="option-register">Ou</label>
        <button class="btn-register" type="button">G google</button>
      </form>
    </section>
    <p class="login-link">
    Já tem uma conta? <a href="#">Entrar</a>
    </p>
  `;
  rootElement.innerHTML = templateRegister

  const registerButton = rootElement.querySelector('#btn-register');
  registerButton.addEventListener('click', createRegister);

  return rootElement;
};