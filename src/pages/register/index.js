/* eslint-disable import/named */
import { createProfile, confirmEmail } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Register = () => {
  const register = document.createElement('div');
  register.classList.add('container');
  register.innerHTML = `
  <div class='form-login'>
  <div class='header-container'>
    <figure class='logo'><a href='/'><img src='./assets/logo/runners-360px.png' alt='Logo Runners - Voltar' id='logo'></a></figure>
    <h1>Cadastre-se!</h1>
    <p class='about'>Compartilhe suas corridas, metas e desafios!</p>
    <hr />
  </div>
  <div>
    <p class='register'>Não compartilhamos seus dados com terceiros ;)</p>
  </div>
  <div class="row clearfix">
    <div class="col_half">
      <div class="input_field"><span><i class="fas fa-running" aria-hidden="true"></i></span>
        <input type='text' id='displayName' placeholder='Nome'required/>      
      </div>
      <div class="input_field"><span><i class="far fa-envelope" aria-hidden="true"></i></span>
        <input type="email" id='email' name="email" placeholder="Digite seu e-mail" required />
      </div>
    </div>
    <div class="col_half last">
      <form>
        <h3 class='error' id='msgError'></h3>
        <div class="input_field"><span><i class="fa fa-lock" aria-hidden="true"></i></span>
          <input type='password' id='password' placeholder='Senha'/>
        </div>
        <div class="input_field"><span><i class="fa fa-lock" aria-hidden="true"></i></span>
          <input type='password' id='confirmPwd' placeholder='Confirmar Senha'/>
        </div>
      </form>
    </div>
  </div>
</div>

<div><input class="button" id='btnRegister' type="submit" value="Cadastre-se"/></div>
  `;

  const btnRegister = register.querySelector('#btnRegister');
  const msgError = register.querySelector('#msgError');

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    const user = {
      displayName: register.querySelector('#displayName').value,
      email: register.querySelector('#email').value,
      photoURL: '../../assets/Photo_Default.png',
    };

    const password = register.querySelector('#password').value;
    const confPassword = register.querySelector('#confirmPwd').value;

    if (password !== confPassword) {
      const alert = 'Senha informada, esta divergente.';
      msgError.innerHTML = alert;
    } else {
      createProfile(user.email, password)
        .then(() => {
          const uid = firebase.auth().currentUser.uid;
          firebase.firestore().collection('users').doc(uid).set({ user })
            .then(() => {
              confirmEmail();
            })
            .then(() => {
              alert('Cadastro realizado com sucesso!');
            })
            .then(() => {
              onNavigate('/post');
            })
            .catch((error) => {
              const errormsg = error.message;
              msgError.innerHTML = errormsg;
            });
        });
    }
  });
  return register;
};
