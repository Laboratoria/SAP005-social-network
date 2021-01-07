import { logOut } from '../../services/index.js';

export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <button class='logOut' id='sgnOutBtn' type="submit">Logout</button>
     
      <form id="post-form">
        <input type="text" id="post-text" width="100px" height="60px"></input>
        <button type="submit">Publicar</button>
      </form>
      <ul id="post-list"></ul>

  `;

  const logoutButton = rootElement.querySelector('#sgnOutBtn')
  logoutButton.addEventListener('click', (e)=>{
   e.preventDefault();
   logOut();
  });

  const post = rootElement.querySelector('#post-form');
  post.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = rootElement.querySelector('#post-text').value;
    const post = {
      text: text,
      userId: 'teste',
      likes: 'teste2',
      comments: 'teste3',
    }
    const postCollection = firebase.firestore().collection('posts')
    postCollection.add(post)
    loadPosts();
  });


  function addPost (post) {
    const template = `
      <li id='${post.id}'>
        ${post.data().text}
        ${post.data().likes}
    `
    rootElement.querySelector('#post-list').innerHTML += template;
  }

  function loadPosts(){
    const postCollection = firebase.firestore().collection('posts')
    postCollection.get().then(x =>{
      x.forEach(post => {
        addPost(post)
      });
    })
  }
  
  
  return rootElement;
};
