import { CreateUser } from '../../services/index.js';

export const SingUp = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <h1>Sing up!</h1>
    <form class="singup-form">
      <input class="name" type="text" placeholder="Name">
      <input class="email" type="email" placeholder="E-mail">
      <input class="password" type="password" placeholder="Password">
      <input class="confirm-password" type="password" placeholder="Confirm Password">

      <button class="btn-create">Create your account</button>
    </form>
    `;
  return rootElement;
};

const singupForm = document.querySelector('.singup-form');
singupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameElement = singupForm['.name'].value;
  const emailElement = singupForm['.email'].value;
  const createPassword = singupForm['.password'].value;
  const confirmPassword = singupForm['.confirm-password'].value;
  const errorMessage = '';

  if (nameElement === '' || emailElement === '' || createPassword === '' || confirmPassword === '') {
    errorMessage.textContent = 'There are blank fields!';
  } else if (createPassword !== confirmPassword) {
    errorMessage.textContent = 'Passwords does not match.';
  }
  return CreateUser();
});
