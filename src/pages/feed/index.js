import { getPosts, Like } from '../../services/index.js';

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
    </div>
     </div>
    `;
   
  const loadPost = (post) => {
    
    const loop = Array.from(Array(post.length).keys());
    loop.forEach(() =>
    document.getElementById('posts').innerHTML  += `
 <!-- <p>${post.data().name} <br> ${post.data().date}</p> -->

  </div>
   <p>
     ${post.data().post_text}
   </p>
    <nav>
      <ul class='friends-post'>
        <li><button id='like' title='Curti' class='react-button like'><img src='./pages/feed/img/reacts/like.png' alt='botao de curtir'>${post.data().likes.length}</button></li> 
        <li><button id='love' title='Amei' class='react-button love'><img src='./pages/feed/img/reacts/heart.png' alt='botao de amar'></button></li>  
    </ul>
    </nav> `
  )
}
  getPosts().then(querySnapshot => {
    querySnapshot.forEach((post) => {
      loadPost(post)
    });
  });
  
  document.querySelectorAll('.like').forEach((e) =>
    e.addEventListener('click', (e) => {
        const likeButton = e.target.parentNode.querySelector('.like')
        const crtUser = firebase.auth().currentUser.uid;
        Like(likeButton.dataset.id, crtUser)
        onNavigate('/feed')     
    })
  )

  return rootElement;
};


  