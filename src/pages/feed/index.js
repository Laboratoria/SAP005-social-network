import { getPosts } from '../../services/index.js';
export const Feed = () => {
    // Coloque sua página
   
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div class='nav-bar'> 
   <nav>
     <ul>
        <li id='logo-feed'></><img src='./pages/feed/img/nav-bar/rocket-icon.png' alt'rocket-logo'>TPM</li>
        <li>Meu perfil</li>
        <li>Feed</li> 
        <li>Comunidades</li> 
        <li id='log-out'>Sair</li>
     </ul>
   </nav>
  </div>
    <div id="profile">
      <figure class='figure-profile'>
        <img class="picture-profile" src="./pages/feed/img/profile/profile-exemple.jpg" alt="foto do perfil"> 
        <p id="name-profile">Keiti Peurri</p>
      </figure>
      
      <form>
        <input id="write-post" class="write-post" type="text" placeholder="Poste uma ideia, uma dica ou uma oportunidade">
        <input type="submit" id='post-it' class="button-feed" value="Postar">
      </form>
    </div>
     <div id='posts'>
     <div class='user-post'> </div>
       <div class='another-user-post'>
        <img class='another-user-photo' src='./pages/feed/img/profile/emilia-clarke.png' alt='Foto do usuário que postou'>
        <p>Daneuris Targuerian</p>
       </div>
        <p>
          I will take what's mine! 
          <br> ${getPosts()}
          DRACARIS!!! 
        </p>
     <nav>
       <ul class='friends-post'>
         <li><button id='like' title='Curti' class='react-button'><img src='./pages/feed/img/reacts/like.png' alt='botao de curtir'></button></li> 
         <li><button id='love' title='Amei' class='react-button'><img src='./pages/feed/img/reacts/heart.png' alt='botao de amar'></button></li> 
         <li><button id='funny' title='Hahaha' class='react-button'><img src='./pages/feed/img/reacts/haha.png' alt='botao para rir'></button></li> 
         <li><button id='congratulations' title='Parabéns' class='react-button'><img src='./pages/feed/img/reacts/claps.png' alt='botao para parabenizar'></button></li> 
      </ul>
   </nav>
     </div>
    `;
    return rootElement;
  };
  
  