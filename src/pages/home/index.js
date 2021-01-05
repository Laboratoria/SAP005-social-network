export const Home = () => {
  const home = document.createElement('div');
  home.classList.add('div-home');
  home.innerHTML = `
  <div class='head-home' alt='Runner|Home'>'Runner|Home'</div>
      <figure class='logo-login'>
      <img src=''alt='Logo Runners' id='logo'>
      </figure>
      <div class='message-error' id='message-error'></div>
      <div class='home-box'>
        <form class='login'>
          <div class='input-form'>
            <p class='login' alt='Login'>Login</p>
            <input type='email' id='email-input' placeholder='E-mail' required></input>
            <input type='password' id='password-home' placeholder='Senha' required></input>
            <button id='submit-home'>Entrar</button>
            <p>Logar com:</p>
            <div class='button-social'>
            <img src="./assets/google.png" alt='Logo Google' id='google-home'>
            </div>
          </div>
        </form>
      <div class='register-home'>
      <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
      </div>
      `;

  return home;
};

// submitHome.addEventListener('click', (event) => {
//   event.preventDefault();
//   const email = document.querySelector('#email-input').value;
//   const password = document.querySelector('#password-home').value;
//   let homeLogin = login.signIn(email, password)
//   homeLogin
//   .then(()=>{
//     window.location.href = '#post'
//   }).catch(()=> {
//     let msnError = erro.message

//       if (error === 'auth/wrong-passaword') {
//         error-message = 'Senha inválida';
//     } else if (error === 'auth/invalid-email'){
//         error-message = 'E-mail Inválido'
//     }
//     const putError = home.querySelector('#message-error');
//     putError.innerHTML = error-message;
// };
//   console.log('mensagemdeautentificaçãoerrada');
// });
// googleHome.addEventListener('click', ()=>{
// singGoogle()
// .then(()=> {
//     const user =
// Colocar aqui as constantes que queremos colocar no firebase
// };
// firebase
// .firestore()
// .collecttion()
// .add(nome da const lá em cima);
// window.location.href = '#timeline';
// })
// .catch
//     const putError = home.querySelector('#message-error');
//     putError.innerHTML = error-message;
// };
// }
// const submitHome = document.querySelector('#submit-home');
// const googleHome = document.querySelector('#google-home');
