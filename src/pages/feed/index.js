import { getPosts, Like } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Feed = () => {
    // Coloque sua página
   
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div class='nav-bar'> 
   <nav>
     <ul>
        <li id='logo-feed'></><img src='./pages/feed/img/nav-bar/rocket-icon.png' alt'rocket-logo'>TPM</li>
        <li id='profile-edit'>Meu perfil</li>
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
    <div id='posts'></div>
    `;
   
  const loadPost = (post) => {
  
    const loop = Array.from(Array(post.length).keys());
    loop.forEach(() =>
    document.getElementById('posts').innerHTML  += `
     <section> 
        <p>
          ${post.data().post_text}
        </p>
      <ul>
        <li><button id='like' title='Curti' class='like react-button'><img src='./pages/feed/img/reacts/like.png' alt='botao de curtir'>${post.data().likes.length}</button></li>
        <li><button id='love' title='Amei' class='love react-button'><img src='./pages/feed/img/reacts/heart.png' alt='botao de amar'></button></li>
       </ul>
      <!-- <p id='time-p'>${post.data().date}</p> -->
        </section>
     `
    )
   }
   /*
   const allLike = rootElement.querySelectorAll('.like');
   allLike.forEach((button) => {
      button.addEventListener('click', (e) => {
        sendLike(e);
      })
   })
   const sendLike = (e) => {
     likedPost()
     .then((retorno) => {
       console.log(retorno);
       e.target.classList.add('liked')
     })
     .catch(() => {
       console.log('Deu não')
     })
   } */

  getPosts().then(querySnapshot => {
    querySnapshot.forEach((post) => {
      loadPost(post)
    });
  });
  return rootElement;
};
/*
let user = firebase.auth().currentUser;
  
function getData(){
  rootElement.innerHTML = `
  <div class='nav-bar'> 
  <nav>
    <ul>
       <li id='logo-feed'></><img src='./pages/feed/img/nav-bar/rocket-icon.png' alt'rocket-logo'>TPM</li>
       <li id='profile-edit'>Meu perfil</li>
       <li>Feed</li> 
       <li>Comunidades</li> 
       <li id='log-out'>Sair</li>
    </ul>
  </nav>
 </div>
 <div id="profile">
  <figure class='edit'>
    <input type='file' id="pic-edit" placeholder='Cole aqui o link de uma foto'>
    <input type='text' id="name-edit" placeholder='Digite seu nome'>
  </figure>
</div>
 `
let name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; 
   }
  }

window.onload = document.getElementById('profile-edit').addEventListener('click', getData); */