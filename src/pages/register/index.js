import { onNavigate } from '../../utils/history.js';

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <section class="register"> 
    <section class="logo">  
        <img src="../../img/ada-lovelace.svg" width="175px" height="175px" alt="Desenho do rosto de Ada Lovelace em preto com um fundo redondo alaranjado">
        <p class="theme"><span class="logoname">[Ada]</p>
    </section>
    <section class="form">
      <div class="title_container" id="title">
        <h2>Se registre no [Ada]</h2>
      </div>
      <div class="form_container">
        <form>
            <div class="input"> <span><i aria-hidden="true" class="envelope"></i></span>
            <input type="email" id="email" placeholder="Email" required />
            </div>
            <div class="input"> <span><i aria-hidden="true" class="lock"></i></span>
            <input type="password" id="password" placeholder="Senha" required />
            </div>
            <div class="input"> <span><i aria-hidden="true" class="lock"></i></span>
            <input type="password" id="passwordConfirmatio" placeholder="Confirme sua senha" required />
            </div>
            <div class="row">
            <div class="col_half">
                <div class="input"> <span><i aria-hidden="true" class="user"></i></span>
                <input type="text" id="name" placeholder="Nome" />
                </div>
            </div>
            <div class="col_half">
                <div class="input"> <span><i aria-hidden="true" class="user"></i></span>
                <input type="text" id="lastName" placeholder="Sobrenome" required />
                </div>
            </div>
            </div>
            <div class="input_field checkbox_option">
                <input type="checkbox" id="cb1">
                <label for="cb1">Concordo com os termos e condições</label>
            </div>
            <div class="input_field checkbox_option">
                <input type="checkbox" id="cb2">
                <label for="cb2">Quero me inscerver na newsletter</label>
            </div>
            <input class="button" id="newRegister" type="submit" value="Registrar" />
        </form>
      </div> 
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
