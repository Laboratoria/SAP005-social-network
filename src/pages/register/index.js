// import { createProfile } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Register = () => {
  const register = document.createElement('div');
  register.classList.add('div-register');
  register.innerHTML = `
  <div class='head-register' alt='Runner|Cadastro'>Runner|Cadastro</div>
  <figure class='container-logo'>
    <img src='./assets/logo_runners.png' class='logo-register' alt='Logo Runners'>
  </figure>

  <form> 
    <div class="form-container">
    <h3 class='error' id='registerError'></h3>
      <input type='text' id='displayName' placeholder='Nome'/>
      <input type='email' id='email' placeholder='E-mail'/>
      <input type='number' id='phoneNumber' placeholder='()999999999'/>
      <input type='password' id='password' placeholder='Senha'/>
      <input type='password' id='confirmPwd' placeholder='Confirmar Senha'/>
      <button id="btnRegister">Registrar</button>
    <a href='/' class='link-exit'>Voltar</a> 
    </div>
  </form>
  `;

  const btnRegister = register.querySelector('#btnRegister');

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const user = {
      displayName: register.querySelector('#displayName').value,
      email: register.querySelector('#email').value,
      phoneNumber: register.querySelector('#phoneNumber').value,
      photoUrl: null,
    };

    const password = register.querySelector('#password').value;
    const confPassword = register.querySelector('#confirmPwd').value;

    if (password !== confPassword) {
      alert('Senha informada, esta divergente.');
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, password)
        .then(() => {
          firebase
            .auth()
            .currentUser
            .sendEmailVerification()
            .then(() => {
              const uid = (firebase.auth().currentUser.uid);
              firebase
                .firestore().collection('users').doc(uid).set({ user });
            })
            .then(() => {
              alert('Cadastro realizado com sucesso!');
            })
            .then(() => {
              // createProfile();
              onNavigate('/post');
            })
            .catch((error) => {
              alert(error.message);
            });
        });
    }
  });
  return register;
};
