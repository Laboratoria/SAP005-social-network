/* eslint-disable no-alert */
import { CreateUser } from '../../services/index.js';

export const SingUp = () => {
  const rootElement = document.createElement('div');
  const formHtml = `
    <div>  
      <h1 class="singup">Sing up!</h1>
      <form class="singup-form" id="singup-form">
        <figure class="profile-img">
          <span class="material-icons">account_circle</span>
          <input type='file' class="file-profile" accept="image/png, image/jpeg">
        </figure>
        <input class="name" id="name" type="text" placeholder="Name">
        <input class="email" id="email" type="email" placeholder="E-mail">
        <input class="password" id="password"type="password" placeholder="Password">
        <input class="confirm-password" id="confirm-password" type="password" placeholder="Confirm Password">
        <button class="btn-create" id="btn-crear">Create your account</button>
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

    if (nameElement === '' || emailElement === '' || createPassword === '' || confirmPassword === '' || nameElement === ' ' || emailElement === ' ' || createPassword === ' ' || confirmPassword === ' ') {
      alert('There are blank fields!');
    } else if (createPassword !== confirmPassword) {
      alert('Passwords does not match.');
    } else {
      CreateUser(nameElement, emailElement, createPassword);
    }
  });

  return rootElement;
};
