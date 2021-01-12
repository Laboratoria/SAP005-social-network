import { SignOut } from '../../services/index.js';

export const Feed = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  const postHtml = `
    <div>
      <h1 class="feed">Account created successfully! Feed!</h1>
      <form class="form-post" id="form-post">
        <input class="text-post" id="text-post" type="text">
        <button class="btn-submit" id="btn-submit" type="submit">Submit</button>
      </form>
      <button class="btn-logout">LogOut</button>
    </div> `;

  rootElement.innerHTML = postHtml;

  const createPost = rootElement.querySelector('.form-post');
  createPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = document.querySelector('.text-post').value;
    const post = {
      text: textPost,
      user_id: 'maria',
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
