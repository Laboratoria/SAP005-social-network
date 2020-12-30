import { renderPage } from '../../router.js';

// import { nomeUsuario } from './data.js';

export const Home = () => {
  // Coloque sua página
  const pageHome = `
      <header>
      <button class="btn-Logout" id="btnLogout">Sair</button>
        <h1 class="name-user" id="userName"></h1>
      </header>
      <main class="main-home">
        <section class="post-enviar">
          <textarea class="post" id="textoPost" placeholder="Conte sobre sua última cerveja..."></textarea>
          <button id="btnPost">Postar</button>
        </section>
        <section class="posts-enviados" id="feedArea">
        </section>
      </main>
    `;

  const rootElement = document.createElement('div');
  rootElement.innerHTML = pageHome;

  const nomeUsuario = () => firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      
      document.querySelector('#userName').innerHTML = `Olá, ${user.displayName}`;
    } else {
      // No user is signed in.
    }
  });

  nomeUsuario();

  const textoPost = rootElement.querySelector('#textoPost');
  const feedArea = rootElement.querySelector('#feedArea');
  const btnPost = rootElement.querySelector('#btnPost');

  function criarPost() {
    const uid = firebase.auth().currentUser.uid;
    const userName = firebase.auth().currentUser.displayName;

    if (textoPost.value === '') {
      alert('Digite alguma coisa!');
    } else {
      const feed = {
        post: textoPost.value,
        name: userName,
        uid,
        date: new Date(),
        likes: 0,

      };

      firebase.firestore().collection('posts').add(feed).then(() => {
      });

      renderPage();
    }
  }
  btnPost.addEventListener('click', criarPost);

  function adicionaPostATela(informacao) {
    const cardPost = `
      <div class="card-post">
        <h2 class="nome-usuario">${informacao.name}</h2>
        <button class="btn-editar" id="btnEditarPost">editar post</button>
        <p class="texto-post" id="post">${informacao.post}</p>
        <textarea class="editar-post" id="textareaEditarPost">${informacao.post}</textarea>
        <button class="btn-salvar-editado" id="btnSalvarEdicao">salvar</button>
        <div>
          <button class="btnLike" id="btnLike">curtir</button>
        </div>

      </div>
    `

    // const id = document.createElement('p');
    // id.classList.add('texto-post');
    // id.innerHTML = informacao.post;

    // let likes = document.createElement('div');
    // likes = document.createElement('button');
    // likes.classList.add('btnLike');
    // likes.innerHTML = 'Curtir';

    // likes.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   console.log('funciona botão');
    //   likes = likes.dataset.likes;
    //   likePost(likes);
    // });

    feedArea.innerHTML += cardPost;

    const textareaEditarPost = document.querySelector("#textareaEditarPost");
    const post = document.querySelector("#post");
    const btnEditarPost = document.querySelector("#btnEditarPost");
    btnEditarPost.addEventListener('click', (event) => {
      event.preventDefault();
      console.log("botão editar ok")
      btnEditarPost.style.display = "none";
      textareaEditarPost.style.display = "block"
      btnSalvarEdicao.style.display = "block";
    });

    const btnSalvarEdicao = document.querySelector("#btnSalvarEdicao");
    btnSalvarEdicao.addEventListener('click', (event) => {
      event.preventDefault();
      console.log("botão salvar ok")
      post.innerHTML = textareaEditarPost.value;

      // firebase.firestore().collection('posts').doc(feed).update(post).then(() => {
      //   conteudo.innerHTML = editarPost.value;
      // });

      // firebase.firestore().collection('posts').doc(post.uid).update({
      //   post: editarPost.value
      // })

      textareaEditarPost.style.display = "none";
      btnSalvarEdicao.style.display = "none";
      btnEditarPost.style.display = "block";
    });
  }


  function likePost(uid) {
    const like = firebase.firestore().collection('posts').doc(uid);
    like.update({ likes: firebase.firestore.FieldValue.increment(1) });
    console.log(uid);

    console.log('oi');
    // likes.innerHTML = "Curtir";
    // document.body.appendChild(likes);

    // likesDiv.appendChild(likes);

    // feedArea.appendChild(likesDiv);
  }

  /* const likesNumber = (post) => {
    let like = firebase.firestore().collection('posts').doc(post);
    like.update({likes: firebase.firestore.FieldValue.increment(1)});

    console.log(uid);

  } */

  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((feed) => {
      if (feed.type === 'added') {
        adicionaPostATela(feed.doc.data(), feed.doc.id);
      }
    });
  });

  const btnLogout = rootElement.querySelector('#btnLogout');

  function logout() {
    // console.log("sextou bb")
    firebase.auth().signOut().then(() => {
      // console.log("Sessão Encerrada!!")
      window.location = '/';
    });
  }

  btnLogout.addEventListener('click', logout);

  return rootElement;
};
