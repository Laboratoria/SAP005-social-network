// import { } from '';

export const Profile = () => {
  const profile = document.createElement('div');
  profile.classList.add('div-profile');
  profile.innerHTML = `
  <figure class='logo'>
  <img src='./assets/logo_runners.png'alt='Logo Runners' id='logo'>
  </figure>
  <form>
    <div class='profile-header'>
      <img src='' alt='Imagem do Usuario' id='photo'>
      <ol>
      <li id='li'></li>
      <p class='text' id='name'></p>
      <p class='text' id='city'></p>
      </ol>
    </div>
    <div>
      <h3></h3>
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

  // const user = firebase.firestore().collection('users').doc(uid);
  const user = () => {
    firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user != null) {
          console.log(user.uid);
        } else {
        // No user is signed in.
        }
      });

    // console.log(user);
    // const li = profile.querySelector('#li');
    // li.setAttribute('data-id', user.id);
    // const name = profile.querySelector('#name');
    // name.textContent = user.data().name;

    // li.appendChild(name);

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
  };
  return profile;
};
