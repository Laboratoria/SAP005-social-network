import { onNavigate } from '../../utils/history.js';

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <section class="register"> 
    <section class="left">  
      <img src="../../img/ada-lovelace.svg" width="175px" height="175px" alt="Desenho do rosto de Ada Lovelace em preto com um fundo redondo alaranjado">
      <p class="theme"><span class="logoname">[Ada]</span> Programe como uma mulher.</p>
    </section>
    <section class="right">
      <form id="registerSingIn"> 
          <fieldset class="right">
            <input type="email" class="input-in-line" id="email" placeholder="Email" required />
            <input type="password" class="input-in-line" id="password" placeholder="Senha" required />
            <input type="password" class="input-in-line" id="passwordConfirmatio" placeholder="Confirme sua senha" required />
            <input type="text" class="input-in-line" id="name" placeholder="Nome" />
            <input type="text" class="input-in-line" id="lastName" placeholder="Sobrenome" required />
          </fieldset> 
          <fieldset class="register-button">
            <button type="submit" class="reg-button" id="newRegister"> Registrar</button>
          </fieldset>
      </form>
      
    </section>
  </section>  
  `;

  const email = rootElement.querySelector('#email');
  const password = rootElement.querySelector('#password');
  const passwordConfirmed = rootElement.querySelector('#passwordConfirmation');
  const name = rootElement.querySelector('#name');
  const lastName = rootElement.querySelector('#lastName');

  // ------------------------- MENSAGENS DE ERRO ------------------------- \\
  const verifyErrorCode = {
    'auth/invalid-email': 'O endereço de e-mail não é válido. Por favor, preencha novamente.',
    'auth/invalid-password': 'Senha incorreta. Por favor, tente novamente.',
    'auth/email-already-in-use': 'O e-mail fornecido já está cadastrado. Por favor, forneça um novo endereço.',
    'auth/user-not-found': 'Não há registro desse usuário. Por favor, registre-se para ter acesso à nossa rede.',
    'auth/account-exists-with-different-credential':
      'E-mail já associado a outra conta. Por favor, tente com um novo endereço.',
    default: 'Ocorreu algum erro. Por favor, tente novamente',
  };
  const errorMessageEmptyInput = 'O preenchimento dos campos de e-mail e senha é obrigatório.';

  function printMessageError(message) {
    const elementError = document.createElement('p');
    const errorMessage = document.createTextNode(message);
    elementError.appendChild(errorMessage);
    document.getElementById('errorLogin').innerHTML = '';
    document.getElementById('errorLogin').appendChild(elementError);
  }

  function signUp(signUpEmail, signUpPasswordConfirmed) {
    if (signUpEmail === '' || signUpPasswordConfirmed === '') {
      printMessageError(errorMessageEmptyInput);
    } else {
      const promise = firebase.auth()
        .createUserWithEmailAndPassword(signUpEmail, signUpPasswordConfirmed);
      promise
        .then((res) => {
          console.log(res)
          // onNavigate('/');
        });
    }
  }

  rootElement.querySelector('#newRegister').addEventListener('submit', (event) => {
    event.preventDefault();
    signUp(email.value, passwordConfirmed.value);
  });
  return rootElement;
};
