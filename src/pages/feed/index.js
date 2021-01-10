import {
  logOut,
    createPost,
    readPost,
    editPost,
    deletePost,
    sendImageToDatabase,
    likePosts,
    changeProfileImage,
    commentPosts,
  } from './data.js';

  const setLogOutOnButton = () => {
    document.querySelector('.signOut').addEventListener('click', (event) => {
      event.preventDefault();
      logOut();
    });
  };
  
  const getTextToPublish = () => {
    document.querySelector('#publish-btn').addEventListener('click', () => {
      createPost(document.querySelector('#postText').value);
      document.querySelector('#postText').value = '';
    });
  };
  
  const setUserData = () => {
    firebase.auth().onAuthStateChanged((user) => {
      document.querySelector('#name-user').innerHTML = user.displayName;
      document.querySelector('.photo').src = user.photoURL;
    });
  };
  
  const deleteEvent = (postBox, code) => {
    const deleteBtn = postBox.querySelector(`button[data-id="${code}"]`);
    deleteBtn.addEventListener('click', () => deletePost(code));
  };
  
  
  const setNewProfileImg = (newfile) => {
    document.querySelector('.photo').src = newfile;
  };
  
  const sendNewProfileImg = (callbackToSetNewImage) => {
    document.querySelector('.photo').addEventListener('click', () => {
      const inputFile = document.querySelector('#input-file-profileImg');
      inputFile.style.opacity = 1;
      inputFile.onchange = (event) => {
        changeProfileImage(event.target.files[0], callbackToSetNewImage);
        inputFile.style.opacity = 0;
      };
    });
  };
  
  const showUrlOfImagesToPublish = (urlFile) => {
    document.querySelector('#postText').value = `${urlFile}`;
    document.querySelector('#postText').placeholder = 'O que você quer compartilhar?';
  };
  
  const uploadImage = () => {
    document.querySelector('.publish-img-form-box').style.opacity = 1;
    document.querySelector('#image_uploads').onchange = (event) => {
      sendImageToDatabase(event.target.files[0], showUrlOfImagesToPublish);
      document.querySelector('.publish-img-form-box').style.opacity = 0;
      document.querySelector('#postText').placeholder = 'Aguarde enquanto sua foto é carregada...';
    };
  };
  
  const getUpLoadImgClick = () => document.querySelector('#publish-img-btn').addEventListener('click', uploadImage);
  
  
  // Funções auxiliares chamadas na criação dos posts individuais (loadPostTemplate)
  const getValuesFromEditedPost = (listener, newText, postID) => listener.addEventListener('click', () => {
    editPost(newText.value, postID.value);
  });
  
  const setEditPostClick = (element) => {
    element.querySelector('.edit-btn').addEventListener('click', () => {
      element.querySelector('.text').removeAttribute('disabled');
      element.querySelector('.save-btn-area').classList.remove('display-none');
      getValuesFromEditedPost(element.querySelector('.edit-save-btn'), element.querySelector('.text'), element.getElementsByTagName('data')[0]);
    });
  };
  
  const visibilityOfElementsToCurrentUser = (postBox, user) => {
    if (user !== firebase.auth().currentUser.email) {
      postBox.querySelector('.delete-btn').classList.add('visibility');
      postBox.querySelector('.edit-btn').classList.add('visibility');
    }
  };
  
  // Criação dos templates das postagens individuais
  const loadPostTemplate = (postList) => {
      document.querySelector('#post-area').innerHTML = '';
      postList.forEach(({
            code,
            user,
            data,
            text,
            likes,
            comments,
            url,
          }) => {
            const postBox = document.createElement('div');
            postBox.innerHTML = `
        <data value=${code}></data>
        <header class='title-post-box'>
          <div>
            <div>${user}</div>
            <div>${data}</div>
          </div>

          <div>
            <button class='delete-btn' data-id='${code}'><img class='post-area-icon-del' src="../../assets/quit.png" alt="Edit Icon">
            </button>
          </div>
        </header>
      
        <textarea disabled class='text post-area-text'>${text}</textarea>
        <div>${url}<div>
        <div class='save-btn-area display-none'>
          <button class='edit-save-btn' type='button'>Salvar</button>
        </div>
        
        <footer class='footer-post-box'>

          <section class='footer-post-icons-box'>
            <div class='footer-post-icons-items'>
              <img class='post-area-icon' id="like-icon" src="../../assets/like.png" alt="Like Icon">
              <div id='likes-counter'>${likes.length}</div> 
            </div>
            
            <div class='footer-post-icons-items'>
              <img class='post-area-icon' src="../../assets/comments.png" alt="Comments Icon">
              <div>${comments.length}</div>
            </div>
            
            <div class='edit-btn'><img class='post-area-icon' src="../../assets/pencil.png" alt="Edit Icon"></div>
          </section>
      
          <section class='footer-post-comments-box'>

          <div class='comments-box comments-box-textarea'>
            <textarea placeholder='Deixe seu comentário' id="text-comment"></textarea>
            <br><button id="send-comment">Enviar</button>
          </div>

          ${(comments.length > 0 && comments.map(comment => `
          <div class='comments-box'>
          <p class='comments-box-name'>${comment.name}</p>
          <p>${comment.text}</p>
          </div>
          `)) || ''}
          </section>

        </footer>
    `;
  
      postBox.querySelector('#send-comment').addEventListener('click', () => commentPosts(code, postBox.querySelector('#text-comment').value));
      postBox.querySelector('#like-icon').addEventListener('click', () => likePosts(code));
  
      postBox.classList.add('post-area');
      document.querySelector('#post-area').appendChild(postBox);
  
      visibilityOfElementsToCurrentUser(postBox, user);
      deleteEvent(postBox, code);
      setEditPostClick(postBox);
    });
  };
  
  // Função executada com o carregamento da página:
  export const generalFeed = () => {
    document.querySelector('#root').innerHTML = '';
    const containerFeed = document.createElement('div');
    containerFeed.innerHTML = `
    <header>
      <nav class='navbar-page-feed'>
        <figure class='navbar-page-item-logo'>
          <img class='icon-logo' src="./img/logo.png" alt="Logotipo"><span>Rainbow!</span>
        </figure>
        <div>
          <button class='circle signOut yellow'>
          <img class='icon-circle' src='./img/logout.png'>
          </button>
        </div>
      </nav>
    </header>
    <div class='box-feed'>
      <section class='profile-area'>
        <div class='profile-area-theme'><img class='theme-image' src='./img/capa.jpg'></div>
          <figure class='profile-area-photo-box'>
             <img class='photo'>
             <input type="file" id="input-file-profileImg" class='input-file-profileImg transparency' accept=".jpg, .jpeg, .png">
          </figure>
          <div class='name-profile-area'>
            <h3 id='name-user'></h3>
          </div>
      </section>
        <div class='share-and-post'>
          <section class='share-area'>
            <textarea id='postText' placeholder='O que você quer compartilhar?'></textarea>
             <div class='share-area-buttons'>
              <button id='publish-img-btn' class='circle violet'><img class='icon-circle' src='./img/camera.png'></button>
              <div class='publish-img-form-box transparency'>
                <form method="post">
                  <input type="file" id="image_uploads" class='share-area-img-btn' accept=".jpg, .jpeg, .png">
                 </form>
              </div>
              <button id='publish-btn' class='btn btn-small publish-btn purple'>Publicar</button>
            </div>
          </section>
          <section id='post-area' class='posts-container'>
          </section>
        </div>
    </div>
    `;
    document.querySelector('#root').appendChild(containerFeed);
  
    setLogOutOnButton();
    setUserData();
    sendNewProfileImg(setNewProfileImg);
    getTextToPublish();
    getUpLoadImgClick();
    readPost(loadPostTemplate);
  };