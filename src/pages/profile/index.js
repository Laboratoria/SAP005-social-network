// import { logOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Profile = () => {
  const user = (firebase.auth().currentUser);

  const profile = document.createElement('div');
  profile.classList.add('div-profile');
  profile.innerHTML = `
  <figure class='logo'>
  <img src='./assets/logo_runners.png'alt='Logo Runners' id='logo'>
  </figure>
  <form>
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

  // deletar o usuario
  const del = profile.querySelector('#deleteuser');

  del.addEventListener('click', () => {
    firebase.auth().currentUser
      .then(() => {
        window.confirm('Você realmente deseja deletar seu perfil?');
        user.delete();
      })
      .then(() => {
        alert('Usuario deletado');
        onNavigate('/home');
      })
      .catch((error) => {
        const alert = error.message;
        alert(alert);
      });
  });

  const cancelBtn = profile.querySelector('#cancelbtn');

  cancelBtn.addEventListener('click', () => {
    onNavigate('/post');
  });

  return profile;
};
