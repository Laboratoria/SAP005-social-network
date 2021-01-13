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
            <input type="password" class="input-in-line" id="passwordConfirmation" placeholder="Confirme sua senha" required />
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
  // --------------------- INPUTS ---------------------
  const email = rootElement.querySelector('#email');
  // const password = rootElement.querySelector('#password');
  const passwordConfirmed = rootElement.querySelector('#passwordConfirmation');
  // const name = rootElement.querySelector('#name');
  // const lastName = rootElement.querySelector('#lastName');

  // ---------------------- FUNÇÃO ----------------------
  //   function record(recordEmail, RecordPasswordConfirmed) {
  //     if (recordEmail === '' || RecordPasswordConfirmed === '') {
  //       printMessageError(errorMessageEmptyInput);
  //     } else {
  //       const promise = firebase.auth()
  //         .createUserWithEmailAndPassword(recordEmail, RecordPasswordConfirmed);
  //       promise
  //         .then((res) => {
  //           onNavigate('/');
  //         });
  //     }
  //   }

  //   rootElement.querySelector('#registerSingIn').addEventListener('submit', (event) => {
  //     event.preventDefault();
  //     const emailValue = email.value;
  //     const passwordValue = passwordConfirmed.value;
  //     record(emailValue, passwordValue);
  //   });
  //   return rootElement;
  // }
  // ---------------------- FUNÇÃO ----------------------

  function record(recordEmail, recordPasswordConfirmed) {
    return firebase.auth()
      .createUserWithEmailAndPassword(recordEmail, recordPasswordConfirmed);
  }

  rootElement.querySelector('#registerSingIn').addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValue = email.value;
    const passwordValue = passwordConfirmed.value;
    if (emailValue === '' || passwordValue === '') {
      console.log('deu ruim');
    }
    record(emailValue, passwordValue)
      .then(() => {
        onNavigate('/');
      })
      .catch((err) => {
        console.log(err)
      });
  });
  return rootElement;
};
