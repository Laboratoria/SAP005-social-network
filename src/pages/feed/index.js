export const Feed = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div class='nav-bar'> 
   <nav>
     <ul>
        <li>TPM</li> 
        <li>Meu perfil</li>
        <li>Feed</li> 
        <li>Comunidades</li> 
        <li>Bate-papo</li>
        <li id='logout'>Sair</li>
     </ul>
   </nav>
  </div>
    <div id="profile">
      <figure class='figure-profile'>
        <img class="picture-profile" src="/src/pages/feed/img-profile/profile/profile-exemple.jpg" alt=""> 
        <p id="name-profile">Keiti Peurri</p>
      </figure>
      
      <form>
        <input class="write-post" type="text" placeholder="Poste uma ideia, uma dica ou uma oportunidade">
        <input type="submit" id='post-it' class="button-feed" value="Postar">
      </form>
    </div>
     <div id='posts'>
      <p>
        Olá, garotas! Parabéns por participarem dessa maravilhosa iniciativa. <br>
        Vamos mudar nossas vidas e evoluir juntas!!! 
      </p>
     <nav>
       <ul class='friends-post'>
         <li><img src='/src/pages/feed/reacts/like.png' alt='like-it'></li> 
         <li><img src='/src/pages/feed/reacts/heart.png' alt='love-it'></li> 
         <li><img src='/src/pages/feed/reacts/haha.png' alt='funny'></li> 
         <li><img src='/src/pages/feed/reacts/claps.png' alt='congratulations'></li> 
      </ul>
   </nav>
     </div>
    `;
    return rootElement;
  };
  