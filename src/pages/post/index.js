export const Post = () => {
  const post = document.createElement('div');
  post.classList.add('div-post');
  post.innerHTML = `
  <header class='head-post' alt='Runner|Home'>Runner|Home</header>
  <figure class='logo-post'>
    <img src='./assets/logo_runners.png' alt='Logo Runners' id='logo'>
  </figure>
  <div class="container">
    <section>
      <form id='form-container'>
        <input type='textarea' class='post' id='newPost'/>
        <button type='button' class='btn' id='btn'>Postar</button>
      </form>
    </section>  
  </div>
  <hr/>
  <p class='' id='post-content'></p>
    
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
              <h2>${infUser.displayName}</h2>
              <p>${textSave}</p>
              <div class=''>
              <button id='like'>Curtir <p id='show-like'> ❤️</p></button>
              <button id='delete'>Deletar</button>
              <button id='editar'>Editar</button>
              </div>
              <div class='coment'>
                <hr>
                <textarea class'text-comment'></textarea>
                <button>Enviar</button>
              </div>
            </div>
    `;
  };
  const btnLike = post.querySelector('#like');

  const creatPost = () => {
    const infCreatUser = firebase.auth().currentUser;
    const textToSave = textPost.value;
    const userPost = {
      displayName: infCreatUser.displayName,
      photo: infCreatUser.photoURL,
      text: textToSave,
    };
    firebase.firestore().collection('posts').add(userPost).then(() => {
      console.log('dados salvo');
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
        console.log('Error getting documents: ', error);
      });
  };

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    creatPost();
    obtainPost();
  });

  return post;
};
