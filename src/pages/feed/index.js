import { onNavigate } from '../../utils/history.js';
import { SignOut } from '../../services/index.js';
import { showPosts } from '../../components/postComponent/post.js';

export const Feed = () => {
  const rootElement = document.createElement('div');
  const postHtml = `
    <div>
      <h1 class="feed"> Feed!</h1>
      <button class="btn-logout">LogOut</button>
      <form class="form-post" id="form-post">
        <input class="text-post" id="text-post" type="text">
        <button class="btn-submit" id="btn-submit" type="submit">Submit</button>
      </form>
      <div class="posted-text"></div>
    </div> `;
  showPosts();

  rootElement.innerHTML = postHtml;

  const createPost = rootElement.querySelector('.btn-submit');
  // const loadPosts = rootElement.querySelector('.load-posts');
  createPost.addEventListener('click', (e) => {
    e.preventDefault();
    const txtPost = document.querySelector('.text-post').value;
    const user = firebase.auth().currentUser;
    const userName = user.displayName;
    const userId = user.uid;
    const photo = user.photoURL;
    const date = new Date();

    const post = {
      user: userId,
      name: userName,
      image: photo,
      text: txtPost,
      time: Date.now(),
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
      likes: 0,
      comments: [],
    };

    const collectionPosts = firebase.firestore().collection('posts');
    collectionPosts.add(post)
      .then(() => {
        onNavigate('/feed');
      })
      .catch((error) => {
        error('Error on load');
      });
  });
  const logOut = rootElement.querySelector('.btn-logout');
  logOut.addEventListener('click', () => {
    SignOut();
  });
  return rootElement;
};
