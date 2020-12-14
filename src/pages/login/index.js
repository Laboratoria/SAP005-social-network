export const Login = () => {
  const container = document.createElement('div');
  container.classList.add('div-container');
  container.innerHTML = `
      <div class="">
      <img src="https://media.giphy.com/media/THD7thMQZoOYoyZ3EK/giphy.gif">
      </div>
      <form class="">
      <input type='email' id='email' placeholder='Insira aqui seu email'>
      <input type='password' id='password'  placeholder='Insira sua senha'>
      <button>Log in</button>
      <button>Cadastre-se</button>
      </form>
  `;
  const btLogin = container.querySelector('login');
  const inpEmail = container.querySelector('email');
  const inpPwd = container.querySelector('password');

  return container;
};
