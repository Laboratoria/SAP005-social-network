import { createProfile } from './data.js';

export const Register = () => {
  const register = document.createElement('div');
  register.classList.add('div-register');
  register.innerHTML = `
  <div class='head-register' alt='Runner|Cadastro'>Runner | Cadastro</div>
  <figure class='container-logo'>
    <img src='./assets/logo_runners.png' class='logo-register' alt='Logo Runners'>
  </figure>

  <form> 
    <div class="form-container">
    <h3 class='error' id='registerError'></h3>
      <input type='text' id='name' placeholder='Nome'/>
      <input type='email' id='email' placeholder='E-mail'/>
      <input type='date' id='date' placeholder='dd/mm/aaaa'/>
      <input type="text" id="city" placeholder="Cidade"/>
      <input type="password" id="password" placeholder="Senha"/>
      <input type="password" id="confirmPwd" placeholder="Confirmar Senha"/>
      <button id="btnRegister">Registrar</button>
    <a href='./src/home/index.js' class='link-exit'>Voltar</a> 
    </div>
  </form>
  `;

  const btnRegister = register.querySelector('#btnRegister');
  const confPassword = register.querySelector('#confirmPwd').value;
  const name = register.querySelector('#name').value;
  const mensage = register.querySelector('#registerError').value;
  const password = register.querySelector('#password').value;
  const email = register.querySelector('#email').value;
  const city = register.querySelector('#city').value;
  const date = register.querySelector('#date').value;

  const confirmPassword = () => {
    if (password.value !== confPassword.value) {
      mensage.innerHTML = 'Senha informada, esta divergente.';
    } else {
      mensage.innerHTML = '';
    }
  };

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirmPassword()) {
      createProfile(email.value, password.value).then(() => {
        mensage.innerHTML = 'Cadastro realizado.';
      })
        .catch((error) => {
          mensage.innerHTML = error.message;
        });
    }
  });

  return register;
};
