import { currentUser, delUser } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Profile = () => {
  const user = currentUser();

  const profile = document.createElement('div');
  profile.classList.add('div-profile');
  profile.innerHTML = `
  <figure class='logo'>
  <img src='./assets/logo_runners.png'alt='Logo Runners' id='logo'>
  </figure>
  <form>
  <h3 class='error' id='msgError'></h3>
  <div class='profile-header'>
      <img src='${user.photoURL || '../../assets/Photo_Default.png'}' alt='Imagem do Usuario' id='photo'>
      <p class='text' id='name'>${user.displayName}</p>
      <p class='text' id='email'>${user.email}</p>
      <p class='number' id='phoneNumber'>${user.phoneNumber}</p>
      </div>
      <div>
      </form>
      <div class='profile-btn'>
      <button id='deleteuser'>Deletar Perfil</button>
      <button id='cancelbtn'>Cancelar</button>
      </div>
      `;

  const del = profile.querySelector('#deleteuser');
  const msgError = profile.querySelector('#msgError');

  del.addEventListener('click', () => {
    delUser()
      .then(() => {
        onNavigate('/home');
      })
      .catch((error) => {
        const alert = error.message;
        msgError.innerHTML = alert;
      });
  });

  const cancelBtn = profile.querySelector('#cancelbtn');

  cancelBtn.addEventListener('click', () => {
    onNavigate('/post');
  });

  return profile;
};
