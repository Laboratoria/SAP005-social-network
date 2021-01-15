import { currentUser, delUser, logOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Profile = () => {
  const user = currentUser();

  const profile = document.createElement('div');
  profile.classList.add('div-profile');
  profile.innerHTML = `
  <div class="container">
  <header class="header">
  <img src='./assets/logo/runners-40px.png' alt='Logo Runners' id='logo' class="logo"></a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
    <li id='post'><a href="#">Post</a></li>
    <li id='logOut'><a href="#">Sair</a></li>
  </ul>
  </header>
  <div class='form-login'>
  <hr />
  <form>
  <img class='img-profile' src='${user.photoURL || '../../assets/Photo_Default.png'}' alt='Imagem do Usuario' id='logo'> 
  <p class='text' id='name'>${user.displayName}</p>
  </form>
  <div>
  <input class="button" id='submit-home' type="submit" value="Entrar"/> 
  </div>
  <form>
  <p class='text' id='email'>${user.email}</p>
  </div>
  <div>
  </form>
  <div class='profile-btn'>
  <button id='deleteuser'>Deletar Perfil</button>
      
        
  <footer>
    <p>
        Made with <i class="fa fa-heart"></i> | Devas 
        <i class="fab fa-github"></i>
        <a target="_blank" href="#">  Cris Mantovani</a>
        <i class="fab fa-github"></i>
        <a target="_blank" href="#"> Elis Brasil</a>
        <i class="fab fa-github"></i>
        <a target="_blank" href="#"> Luciana Pereira</a> @
        <i class="fab fa-dev">
        <a target="_blank" href="#"></i>&nbsp;< Laboratoria ></a>
      </p>
    </footer>
    </div>
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

  const post = profile.querySelector('#post');

  post.addEventListener('click', () => {
    onNavigate('/post');
  });

  const btnLogout = profile.querySelector('#logOut');

  btnLogout.addEventListener('click', () => {
    logOut()
      .then(() => {
        onNavigate('/');
      })
      .catch(() => {
        const error = 'Não conseguimos deslogar, por gentileza tentar novamente';
        msgError.innerHTML = error;
      });
  });

  return profile;
};
