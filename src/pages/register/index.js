import { createProfile } from './data.js';

export const Register = () => {
  const container = document.createElement('div');
  container.classList.add('div-register');
  container.innerHTML = `
  <div class='head-register' alt='Runner|Cadastro'>Runner|Cadastro</div>
  <figure class='container-logo'>
    <img src='a/logo_runners.png' class='logo' alt='Logo Runners'>
  </figure>

  <form> 
    <div class="form-container">
    <h1>Cadastro</h1>
    <h3 class='error' id='registerError'></h3>
      <input type='text' id='name' placeholder='Nome'/>
      <input type='email' id='email' placeholder='E-mail'/>
      <input type='date' id='date' placeholder='dd/mm/aaaa'/>
      <input type="text" id="city" placeholder="Cidade"/>
      <input type="password" id="password" placeholder="Senha"/>
      <input type="password" id="confirmPwd" placeholder="Confirmar Senha"/>
    </div>

  </form>
  <button id="btnRegister">Registrar</button>
  <a href="./src/home/index.js"><b>Voltar</b></a> 
  `;

  const btnRegister = container.querySelector('#btnRegister');
  const confPassword = container.querySelector('#confirmPwd').value;
  const name = container.querySelector('#name').value;
  const msgError = container.querySelector('#registerError').value;

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;
    const city = container.querySelector('#city').value;
    const date = container.querySelector('#date').value;
    const registerPf = createProfile.userRegister(email, password);
    registerPf
      .then(() => {

      })
      .catch((error) => {
        msgError.innerHTML = error.message;
      });
  });

  return container;
};
