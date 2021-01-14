import { SignOut } from '../../services/index.js';
import { showPosts } from '../../components/PostComponent/post.js';

export const Feed = () => {
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
    const userName = user.displayName;
    const userId = user.uid;
    const photo = user.photoURL;
    const date = new Date();

    const post = {
      user: userId,
      name: userName,
      image: photo,
      text: textPost,
      // time: Date.now(),
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      likes: 0,
      comments: [],
    };
    const collectionPosts = firebase.firestore().collection('posts');
    collectionPosts.add(post);
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
