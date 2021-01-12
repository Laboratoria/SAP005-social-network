import { SignOut } from '../../services/index.js';

function renderPost(user) {
  const postDiv = document.querySelector('.posted-text');// div onde oS postS ficarão
  // FUNCÃO QUE TRÁS A COLEÇÃO DO USER LOGADO
  firebase.firestore().collection('posts').where('user_id', '==', user.email).get()
    .then((querySnapshot) => {
      // https://firebase.google.com/docs/firestore/query-data/get-data;
      querySnapshot.forEach((post) => {
        const postData = post.data(); //  parâmetro firebase, data=dados.
        const postElement = `
        <ul>
        <li>Texto: ${postData.text}</li> 
        <li>Likes: ${postData.likes}</li>
        <li>Usuario: ${postData.user_id}</li>
        </ul>`;

        postDiv.innerHTML += postElement;
      });
    })
    .catch(() => {
      const postElement = `
      <ul>
      <li>Sem Posts</li> 
      </ul>`;
      postDiv.innerHTML += postElement;
    });
}
// FUNÇÃO QUE MANTÉM O ESTADO DE LOGADO
const showPosts = () => firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    renderPost(user);
    return user;
  }
  return null;
});

export const Feed = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  const postHtml = `
  <div>
  <h1 class="feed">Account created successfully! Feed!</h1>
  <form class="form-post" id="form-post">
  <input class="text-post" id="text-post" type="textarea">
  <button class="btn-submit" id="btn-submit" type="submit">Submit</button>
  <div class="posted-text"></div>
  <button class="btn-singout" id="btn-singout" type="submit">SingOut</button>
  </form>
  <button class="btn-logout">LogOut</button>
  <div class="load-posts" id="load-posts">
  </div>
  </div>
  `;

  showPosts();

  rootElement.innerHTML = postHtml;

  // const loadPosts = rootElement.querySelector('.load-posts');
  const createPost = rootElement.querySelector('.form-post');
  createPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = document.querySelector('.text-post').value;
    const user = firebase.auth().currentUser; // IDENTIFICA USUÁRIO QUE ESTA LOGADO
    if (user != null) {
      const post = {
        text: textPost,
        user_id: user.email,
        likes: 0,
        comments: [],
        date: new Date(),
      };
      const collectionPosts = firebase.firestore().collection('posts');
      collectionPosts.add(post);
    }
    return null;
  });
  const logOut = rootElement.querySelector('.btn-logout');
  logOut.addEventListener('click', () => {
    SignOut();
  });
  return rootElement;
};
/*
  //VERSÃO DANIEL
  // function addPost(post) {
  //   const templatePost = `
  //     <li id="${post.id}">
  //       ${post.data().text} ❤️ ${post.data().likes}
  //     </li>
  //   `
  //   document.querySelector('.load-posts').innerHTML += templatePost;
  // }

  // function loadPosts() {
  //   const collectionPosts = firebase.firestore().collection("posts")
  //   document.querySelector('.load-posts').innerHTML = "Carregando..."
  //   collectionPosts.get().then(snap => {
  //     document.querySelector('.load-posts').innerHTML = " "
  //     snap.forEach(post => {
  //       addPost(data)
  //     })
  //   })
  //   return loadPosts();
  // }

  //VERSÃO KARINA
  function showPosts (data) {
    const templatePosts = `
      <div>
      <p> ${data.post} </div>
      </div>
    `

    loadPosts.innerHTML += templatePosts
  }

firebase.firestore().collection(posts)/*.orderBy("date", "desc").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((post) => {
      if (post.type ==="added") {
        showPosts(post.doc.data.doc.id)
      }
    })
  })
  */
