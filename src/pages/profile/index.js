// import { } from '';

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
  <div id='div'>
      <p class='text' id='name'>${user.displayName}</p>
      <p class='text' id='email'>${user.email}</p>
      <p class='number' id='phoneNumber'>${user.phoneNumber}</p>
      </div> 
      </div>
      <div>
      <h3>Alterar senha</h3>
      <input type="password" id="password" placeholder='Senha'/>
      <input type="password" id="confirmPwd" placeholder='Confirmar Senha'/>
      </div>
      </form>
      <div class='profile-btn'>
      <h3 class='error' id='msgError'></h3>
      <button id='cancelbtn'>Cancelar</button>
      <button id='savebtn'>Salvar</button>
      </div>
      `;

  // const login = () => {
  // firebase
  //   .auth().
  //   .onAuthStateChanged(() => {
  //     if (user != null) {
  //       // console.log(user.uid);
  //       const user = {
  //         displayName: ,
  //         Email: ,
  //         PhotoUrl: ,
  //       }
  //     } else {
  //     // No user is signed in.
  //     }
  //   });
  

  // }
  // const uid = firebase.auth().currentUser.uid;
  // const user = firebase.auth().onAuthStateChange();
  // console.log(user);

  // const div = profile.querySelector('#div');
  // div.setAttribute('data-id', user.id);
  // const name = profile.querySelector('#name');
  // name.textContent = user.data().displayName;

  // console.log(user);

  // div.appendChild(name);

  // const registerUser = {
  //   name: user.displayName,
  // };
  //   Receber informações específicas de provedor do perfil de um usuário
  //  receber as informações de perfil recuperadas dos provedores de login
  // vinculados a um usuário, use a propriedade providerData
  // if (user != null) {
  //   user.providerData.forEach((profile) => {
  //     console.log(`Sign-in provider: ${profile.providerId}`);
  //     console.log(`  Provider-specific UID: ${profile.uid}`);
  //     console.log(`  Name: ${profile.displayName}`);
  //     console.log(`  Email: ${profile.email}`);
  //     console.log(`  Photo URL: ${profile.photoURL}`);
  //   });
  // }

  // const saveBtn = profile.querySelector('#savebtn');
  // const cancelBtn = profile.querySelector('#cancelbtn');

  // saveBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   const password = profile.querySelector('#password').Value;
  //   const newPassword = profile.querySelector('#confirmPwd"').Value;
  //   const changePwd = user.updatePassword(password, newPassword);
  //   changePwd
  //     .then(() => {
  //     // Update successful.
  //     }).catch((error) => {
  //       // An error happened.
  //     });
  // });

  // cancelBtn.addEventListener('click', () => {
  //   window.location.href = '#post';
  // });

  return profile;
};
