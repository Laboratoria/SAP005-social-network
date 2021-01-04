export const Home = () => {
  const container = document.createElement('div');
  container.classList.add('div-home');
  container.innerHTML = `
    <img alt='Logo Runners' id='logo'>
    <h1>Olá!</h1>
  <form class='login'>
    <div class='input-form'>
    <input type='email' id='email-input' placeholder='E-mail'>
    <input type='password' id='password-home' placeholder='Senha'>
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
    emailInput: document.getElementById('email-input'),
    passwordHome: document.getElementById('password-home'),
    submitHome: document.getElementById('submit-home'),
    facebookHome: document.getElementById('facebook-home'),
    googleHome: document.getElementById('google-home'),
  };
  html.submitHome.addEventListener('click', () => {
    const email = html.emailInput;
    const password = html.passwordHome;
    firebase.auth().singInWithEmailAndPassword(email.value, password.value).then(() => {
      console.log('emailautenticado');
    }).catch(() => {
      console.log('mensagemdeautentificaçãoerrada');
    });
    return container;
  });
};
