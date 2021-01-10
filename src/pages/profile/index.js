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
      <p class='text' id='name'></p>
      <p class='text' id='city'></p>
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
  const user = firebase.auth().currentUser;

  // const registerUser = {
  //   name: user.displayName,
  // };
  //   Receber informações específicas de provedor do perfil de um usuário
  //  receber as informações de perfil recuperadas dos provedores de login
  // vinculados a um usuário, use a propriedade providerData
  if (user != null) {
    user.providerData.forEach((profile) => {
      console.log(`Sign-in provider: ${profile.providerId}`);
      console.log(`  Provider-specific UID: ${profile.uid}`);
      console.log(`  Name: ${profile.displayName}`);
      console.log(`  Email: ${profile.email}`);
      console.log(`  Photo URL: ${profile.photoURL}`);
    });
  }

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
