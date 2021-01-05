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

const submitHome = document.querySelector('#submit-home');
const googleHome = document.querySelector('#google-home');

submitHome.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-input').value;
    const password = document.querySelector('#password-home').value;
},
console.log(email))
};