import { CreateUser } from '../../services/index.js';

export const SingUp = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');

  const formHtml = `
  <div>  
    <h1>Sing up!</h1>
    <form class="singup-form">
      <input class="name" id="name" type="text" placeholder="Name" required>
      <input class="email" id="email" type="email" placeholder="E-mail" required>
      <input class="password" id="password"type="password" placeholder="Password" required>
      <input class="confirm-password" id="confirm-password" type="password" placeholder="Confirm Password" required>
      <button class="btn-create" id="btn-create">Create your account</button>
    </form>
  </div>`;
  rootElement.innerHTML = formHtml;

  const singupForm = rootElement.querySelector('.btn-create');
  singupForm.addEventListener('click', (e) => {
    e.preventDefault();
    const nameElement = document.querySelector('.name').value;
    const emailElement = document.querySelector('.email').value;
    const createPassword = rootElement.querySelector('.password').value;
    const confirmPassword = rootElement.querySelector('.confirm-password').value;
    const errorMessage = '';

    if (nameElement === '' || emailElement === '' || createPassword === '' || confirmPassword === '' || nameElement === ' ' || emailElement === ' ' || createPassword === ' ' || confirmPassword === ' ') {
      errorMessage.alert('There are blank fields!');
    } else if (createPassword !== confirmPassword) {
      errorMessage.alert('Passwords does not match.');
    } else {
      CreateUser(emailElement, createPassword);
    }
  });
  return rootElement;
};
