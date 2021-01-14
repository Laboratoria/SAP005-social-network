import { SignOut } from '../../services/index.js';
import { showPosts } from '../../components/PostComponent/post.js';

export const Feed = () => {
  const rootElement = document.createElement('div');
  const postHtml = `
    <div>
      <h1 class="feed">Account created successfully! Feed!</h1>
      <button class="btn-logout">LogOut</button>
      <form class="form-post" id="form-post">
        <input class="text-post" id="text-post" type="text">
        <button class="btn-submit" id="btn-submit" type="submit">Submit</button>
      </form>
      <div class="posted-text"></div>
    </div> `;

  showPosts();
  rootElement.innerHTML = postHtml;

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
