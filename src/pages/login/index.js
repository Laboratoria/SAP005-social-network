import { SingIn } from '../../services/index.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  const formHtml = `
    <div class="container-form" id="login-form">
      <h1>Login!</h1>
      <form class="login-form">
        <input class="email-login" id="email-login" type="email" placeholder="E-mail" required>
        <input class="psw-login" id="psw-login" type="password" placeholder="Password" required>
        <button class="btn-login" id="btn-login">Login</button>
      </form>
    </div> `;
  rootElement.innerHTML = formHtml;

  const loginForm = rootElement.querySelector('.btn-login');
  loginForm.addEventListener('click', (e) => {
    e.preventDefault();
    const userEmail = document.querySelector('.email-login').value;
    const userPassword = document.querySelector('.psw-login').value;
    const errorMessage = '';

    if (userEmail === '' || userPassword === '') {
      errorMessage.alert('There are blank fields');
    } else {
      SingIn(userEmail, userPassword);
      // eslint-disable-next-line no-console
      console.log('você está logado parça!');
    }
  });
  // eslint-disable-next-line no-console
  console.log(rootElement);
  return rootElement;
};
