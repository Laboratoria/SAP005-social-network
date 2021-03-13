import { logOut } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Post = () => {
  const post = document.createElement('div');
  post.classList.add('div-post');
  post.innerHTML = `
<div class='container'>
  <header class="header">
    <img src='./assets/logo/runners-40px.png' alt='Logo Runners' id='logo' class="logo"></a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li id='profile'><a href="#">Perfil</a></li>
      <li id='logOut'><a href="#">Sair</a></li>
    </ul>
  </header>
  <div class="form-login">
    <hr />
    <section>
      <form>
        <textarea class='post' id='newPost'></textarea>
        <hr />
        <button type='button' class='btnn' id='btn'>Postar</button>
      </form>
    </section>
  </div>
</div>
<div class='' id='post-content'></div>
    
`;

  const btnPost = post.querySelector('#btn');
  const textPost = post.querySelector('#newPost');
  const postContent = post.querySelector('#post-content');

  const addCardToScreen = () => {
    const infUser = firebase.auth().currentUser;
    const textSave = textPost.value;
    postContent.innerHTML += `
            <div class='post-card'>
            <img src='${infUser.photoURL || '../../assets/Photo_Default.png'}' alt='Imagem do Usuario' id='photo'>
              <h2 class='name'>${infUser.displayName}</h2>
              <p class='text'>${textSave}</p>
              <button id='like'><p id='show-like'>❤️</p></button>
            </div>
    `;
  };

  const creatPost = () => {
    const infCreatUser = firebase.auth().currentUser;
    const textToSave = textPost.value;
    const userPost = {
      displayName: infCreatUser.displayName,
      photo: infCreatUser.photoURL,
      text: textToSave,
    };
    firebase.firestore().collection('posts').add(userPost).then(() => {
      // console.log('dados salvo');
      addCardToScreen(userPost);
    });
  };

  const obtainPost = () => {
    firebase.firestore().collection('posts').orderBy('date', 'desc').get()
      .then((snapshot) => {
        // para retornar tudo que tem dentro.
        // data para puxar os dados
        // console.log(snapshot);
        snapshot.forEach((doc) => {
          // console.log(doc.id, ' => ', doc.data());
          addCardToScreen(doc);
        });
      })
      .catch((error) => {
        alert('Error getting documents: ', error);
      });
  };

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    creatPost();
    obtainPost();
  });

  const ppost = post.querySelector('#profile');
  ppost.addEventListener('click', () => {
    onNavigate('/profile');
  });
  const leave = post.querySelector('#logOut');
  leave.addEventListener('click', () => {
    logOut()
      .then(() => {
        onNavigate('/');
      })
      .catch(() => {
        const error = 'Não conseguimos deslogar, por gentileza tentar novamente';
        alert(error);
      });
  });

  return post;
};
