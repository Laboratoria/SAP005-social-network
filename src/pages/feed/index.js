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
        <li id='logout'>Sair</li>
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
       <div class='another-user-post'>
       <img class='another-user-photo' src='/src/pages/feed/img/profile/emilia-clarke.png' alt='Foto do usuário que postou'>
       <p>Daneuris Targuerian</p>
       </div>
        <p>
          I will take what's mine! <br>
          DRACARIS!!! 
        </p>
     <nav>
       <ul class='friends-post'>
         <li><button title='Curti' class='react-button'><img src='./pages/feed/img/reacts/like.png' alt='botao de curtir'></button></li> 
         <li><button title='Amei' class='react-button'><img src='./pages/feed/img/reacts/heart.png' alt='botao de amar'></button></li> 
         <li><button title='Hahaha' class='react-button'><img src='./pages/feed/img/reacts/haha.png' alt='botao para rir'></button></li> 
         <li><button title='Parabéns' class='react-button'><img src='./pages/feed/img/reacts/claps.png' alt='botao para parabenizar'></button></li> 
      </ul>
   </nav>
     </div>
    `;

  /* rootElement.querySelector('#post-it').addEventListener("click", ()=>{
    const mensagem = rootElement.querySelector('#write-post').value
  
   firebase.firestore().collection("posts").add({
      mensagem, 
      likes: 0
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }) */


    return rootElement;
  };
  