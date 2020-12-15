export const Login = () => {
  const container = document.createElement('div');
  container.classList.add('div-container');
  container.innerHTML = `
  <div id="fundo">
  </div>
  <form class="login">
    <div class="input-form">
      <input type='email' id='email' placeholder='E-mail'>
      <input type='password' id='password' placeholder='Senha'>
    </div>
    <button id='submit'>Entrar</button>
    <div id="redes">
      <div >
        <img src="./assets/facebook.png">
      </div>
      <div >
        <img src="./assets/google.png">
      </div>
      <div >
        <img src="./assets/email.png">
      </div>
    </div>
    <p class="text"><b>Ou inscreva-se com</b></p>
  </form>  `;
  return container;
};
