/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable semi */
/* eslint-disable arrow-body-style */
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
  const password = rootElement.querySelector('#password');
  const passwordConfirmed = rootElement.querySelector('#passwordConfirmation');
  // const name = rootElement.querySelector('#name');
  // const lastName = rootElement.querySelector('#lastName');

  //   // ---------------------- para exportar do services ----------------------//
  const record = (userEmail, userPassword) => {
    return firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
  };

  const emailVerify = () => {
    return firebase.auth().currentUser.sendEmailVerification()
  };

  // ---------------------- FUNÇÕES ----------------------//

  rootElement.querySelector('#registerSingIn').addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValeu = email.value;
    const passwordValeu = password.value;
    const confirmSamePassword = passwordConfirmed.value;
    if (passwordValeu !== confirmSamePassword) {
      alert("As senhas não são iguais");
    }
    else if (passwordValeu.length < 6) {
      alert("Sua senha tem que conter no minimo 6 caracteres");
    }
    else {
      record(emailValeu, passwordValeu)
        .then(() => {
          emailVerify()
            .then(() => {
              onNavigate('/');
            })
            .catch((err) => {
              console.log(err)
            });
        })
        .catch((err) => {
          console.log(err)
        });
    }
  });

  return rootElement;
};
