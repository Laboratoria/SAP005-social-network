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
      <input type='text' id='name' placeholder='Nome'/>
      <input type='date' id='date' placeholder='dd/mm/aaaa'/>
      <input type="text" id="city" placeholder="Cidade"/>
      <input type="password" id="password" placeholder="Senha"/>
      <input type="password" id="confirmPwd" placeholder="Confirmar Senha"/>
    </div>
  </form>
    <div class='profile-btn'>
      <h3 class='error' id='msgError'></h3>
      <button id='cancelbtn'>Cancelar</button>
      <button id='savebtn'>Salvar</button>
    </div>
  `;
  
  return profile;
};
