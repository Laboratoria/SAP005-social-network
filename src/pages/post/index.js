import { userId } from '../../services/index.js';

// import { auth } from 'firebase-admin';

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
  <section class='' id='post-content'>
  </section>
    
`;
  // const firestore = firebase.firestore();
  // const users = firebase.collection('users');

  const postContent = post.querySelector('#post-content');
  // const userName = post.querySelector('#name');
  const btnPost = post.querySelector('#btn');
  const textPost = post.querySelector('#newPost').value;
  const db = firebase.firestore();
  const user = {
    img: '',
    name: '',
    text: textPost,
  };

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = post.querySelector('#newPost').value;
    db.collection('posts').add({ user })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });

  // postContent.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   const textPost = post.querySelector('#newPost').value;
  //   const newName = firebase.auth().currentUser.displayName;
  //   const posts = {
  //     text: textPost,
  //     name: newName,
  //     likes: 0,
  //     comments: [],
  //   };
  //   const postCollection = firebase.firestore().collection('posts').add(posts);
  //   return postCollection;
  // });

  // const createNewPost = (posts) => {
  //   const addPost = `
  //   <li>
  //     ${posts.text} ${posts.data().likes}
  //   </li>
  //   `;
  //   post.querySelector('#post-container').innerHTML += addPost;
  // };

  // firebase.firestore().collection('posts').onSnapshot((snapshot) => {
  //   snapshot.docChanges().forEach((posts) => {
  //     if (posts.type === 'added') {
  //       createNewPost(posts.doc.data.doc);
  //     }
  //   });
  // });

  // const showNewPost = () => {
  //   const postCollection = firebase.firestore().collection('posts');
  //   post.querySelector('#post-container').innerHTML += 'Carregando';
  //   postCollection.get().then((snap) => {
  //     post.querySelector('#post-container').innerHTML = '';
  //     snap.forEach((posts) => {
  //       createNewPost(data);
  //     });
  //   });
  //   return showNewPost();
  // };

  // tERMINA

  // const createNewPost = (e) => {
  //   e.preventDefault();
  //   const newPost = post.querySelector('#post');
  //   const user = auth.currentUser;
  //   const date = new Date();
  //   if (newPost === '' || newPost === undefined || newPost === null) {
  //     alert('Por favor preencha o campo de postagem !');
  //   } else {
  //     postCollection.add({
  //       name: user.displayName,
  //       id: user.id,
  //       img: user.photoURL,
  //       textPost: newPost,
  //       date: date.toLocaleString(),
  //       like: 0,
  //     })
  //       .then(() => {
  //         post.querySelector('#post');
  //         alert('Post publicado com sucesso!');
  //       })
  //       .catch(() => {
  //         alert('Ops, ocorreu um erro tente novamente.');
  //       });
  //   }
  // };

  return post;
};
