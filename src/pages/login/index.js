import { loginTags } from './standard.js';
import { validation , persist } from '../../services/index.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  const pageStructure = loginTags();
  rootElement.innerHTML = pageStructure;
  
  const loginButton = rootElement.querySelector('#lgn-btn');
  const signUpButton = rootElement.querySelector('#sgnUp-btn');

  // const clear = () => {
  //   email.value = '';
  //   password.value = '';
  // };  

  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const person = {
      email: rootElement.querySelector('#email-login').value,
      password: rootElement.querySelector('#password-login').value,
    }
    console.log(person);
    validation(person);
    persist(person);
  });

  signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    rootElement.innerHTML = '';
  });

  return rootElement;
};