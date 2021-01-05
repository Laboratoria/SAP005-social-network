import { createUser } from '../../services/index.js';

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="main-register">
  <img class="logo" src="/images/logo-deva.png">
  <div class="register">
    <form class="register-input">
      <input class="register-input" id="register-name" type="text" placeholder="Nome completo">
      </input>
      <input class="register-input" id="register-userID" type="text" placeholder="Nome de usuária">
      </input>
      <input class="register-input" id="register-email" type="text" placeholder="Insira seu email">
      </input>
      <input class="register-input" id="register-pass" type="text" placeholder="Insira sua senha">
      </input>
      <input class="register-input" id="register-passConfirm" type="text" placeholder="Confirmar senha">
      </input>
      <p id="doesntMatch"></p>
      <button class="register-input" id="btn-register-confirm" type="submit">CADASTRE-SE</button>
    </form>
  </div>
</div>
  `;

const submitBTN = rootElement.querySelector('#btn-register-confirm');
submitBTN.addEventListener('click', (event) => {
  event.preventDefault();
  const pass = rootElement.querySelector('#register-pass').value;
  const passConfirm = rootElement.querySelector('#register-passConfirm').value;
  const erroDoesntMatch = rootElement.querySelector('#doesntMatch');

  if (pass !== passConfirm) {
    erroDoesntMatch.innerHTML = 'Senha não Confere';
  } else {
    erroDoesntMatch.innerHTML = ' ';
    const person = {
      userName: rootElement.querySelector('#register-name').value,
      userId: rootElement.querySelector('#register-userID').value,
      email: rootElement.querySelector('#register-email').value,
      password: rootElement.querySelector('#register-pass').value,
    };
    createUser(person);
    console.log(createUser(person));
  }
});
  return rootElement;
};

  