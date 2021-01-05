import {login, signGoogle, signFacebook} from './index.js';

export const Home = () => {
  const home = document.createElement('div');

  home.classList.add('div-home');

  home.innerHTML = `
      <figure class='logo-login'>
      <img src=''alt='Logo Runners' id='logo'>
      </figure>
       <div class='home-box'>
       <div class='message-error' id='message-error'></div>
    <form class='login'>
      <div class='input-form'>
      <input type='email' id='email-input' placeholder='E-mail' required></input>
      <input type='password' id='password-home' placeholder='Senha' required></input>
      </div>
      <button id='submit-home'>Entrar</button>
      <div id="social-home">
      <p>Logar com:</p>
      <div class='button-social'>
      <img src="./assets/facebook.png" alt='Logo Facebook' id='facebook-home'>
      <img src="./assets/google.png" alt='Logo Google' id='google-home'>
      </div>
      </div>
      <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
      </form>
      `;
      
  const html = {
    emailInput: document.querySelector('#email-input'),
    passwordHome: document.querySelector('#password-home'),
};
const submitHome = document.querySelector('#submit-home');
const facebookHome = document.querySelector('#facebook-home');
const googleHome = document.querySelector('#google-home');

submitHome.addEventListener('click', () => {
    const email = html.emailInput;
    const password = html.passwordHome;
    firebase.auth().singInWithEmailAndPassword(email.value, password.value).then(() => {
        // window.location.href = 
      console.log('emailautenticado');
    }).catch(() => {
    //     let error-message = erro.message;

    //       if (error === 'auth/wrong-passaword') {
    //         error-message = 'Senha inválida';
    //     } else if (error === 'auth/invalid-email'){
    //         error-message = 'E-mail Inválido'
    //     }
    //     const putError = home.querySelector('#message-error');
    //     putError.innerHTML = error-message;
    // };
      console.log('mensagemdeautentificaçãoerrada');
    });
facebookHome.addEventListener('click', ()=>
{ signFacebook()

});
googleHome.addEventListener('click', ()=>
{ singGoogle()
    .then(()=> {
Colocar aqui as constantes que queremos colocar no firebase
    };
    .firestore()
    .collecttion()
    .add(nome da const lá em cima);
    window.location.href = '#home';
})
.catch
});
  return home;
};
