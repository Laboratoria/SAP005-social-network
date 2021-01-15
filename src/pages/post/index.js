// import { post,  } from './data.js';

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
        <input type='text' class='name' id='name'/>
        <input type='textarea' class='post' id='post'/>
        <button type='button' class='btn' id='btn'>Postar</button>
      </form>
    </section>  
  </div>
  <hr/>
  <section class='' id='post-content'>
  </section>
    
`;
  // const postContainer = post.getElementsByClassName('#post-container');
  // const userName = post.querySelector('#name');
  // const btnPost = post.querySelector('#btn');
  // const ref = firebase.database().ref('post/');
  //   const firebase = require("firebase");
  // // Required for side-effects
  //   require("firebase/firestore");

  const newPost = post.querySelector('#form-container');
  newPost.addEventListener('submit', (e) => {
    e.preventDefault();
    // const textPost = post.querySelector('#post').value;
    // const posts = {
    //   uid: '',
    //   text: textPost,
    //   likes: 0,
    //   time: '',
    // };
    // Criara uma coleção das postagens
    // const collectionOfPosts = firebase.firestore().collection('form-container');
    // // Adicionando as postagens
    // const addNewPost = collectionOfPosts.add('posts')
    //   .then((res) => {
    //     // Carregar post
    //     function uploadNewPost() {
    //       collectionOfPosts.get().then((snapshot) => {
    //         post.querySelector('#post-content').innerHTML = '';
    //         snapshot.forEach(() => {
    //           // Publicar postagem
    //           function publishPost() {
    //             const postContent = `<p>${posts.data().text}</p>`;
    //             post.querySelector('#post-content').innerHTML += postContent;
    //           }
    //           publishPost();
    //         });
    //       });
    //     }
    //     uploadNewPost();
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  });

  // // Adicionar card na tela
  // // information é o objeto contendo os dados do post
  // function addScreenCard(post) {
  //   // header do post
  //   const header = container.createElement('h2');
  //   header.innerHTML = information.name;
  //   header.classList.add('post-title');

  //   // content do post
  //   const content = container.createElement('p');
  //   content.classList.add('post-text');
  //   content.innerText = information.text_post;

  //   // button do post
  //   const inner = container.createElement('div');
  //   inner.classList.add('row');

  //   // button adicionar
  //   const buttonAdd = container.createElement('button');
  //   buttonAdd.classList.add('btn');
  //   buttonAdd.setAttribute('onclick', `curtir(${information.id})`);
  //   buttonAdd.innerText = '+';
  //   inner.appendChild(buttonAdd);

  //   // Contador de curtidas
  //   const counter = container.createElement('span');
  //   counter.innerHTML = information.enjoy;
  //   counter.classList.add('text-center');
  //   inner.appendChild(counter);

  //   // Botão de subtrair
  //   const buttonSub = container.createElement('button');
  //   buttonSub.classList.add('btn', 'btn_link');
  //   buttonSub.setAttribute('onclick', `descurtir(${information.id})`);
  //   buttonSub.innerText = '-';
  //   inner.appendChild(buttonSub);

  //   // botão excluir
  //   const buttonDel = container.createElement('button');
  //   buttonDel.classList.add('btn', 'btn_danger');
  //   buttonDel.setAttribute('onclick', `deletar(${information.id})`);
  //   buttonDel.innerText = 'X';
  //   inner.appendChild(buttonDel);

  //   // Post
  //   const newPost = container.createElement('div');
  //   newPost.classList.add('post');
  //   newPost.id = information.id;
  //   const postBody = container.createElement('div');
  //   postBody.classList.add('post-body');

  //   postBody.appendChild(header);
  //   postBody.appendChild(content);
  //   postBody.appendChild(inner);
  //   newPost.appendChild(postBody);

  //   // Iserir no container
  //   post_container.appendChild(newPost);
  // }

  // function creatPost() {
  //   // const post = {
  //   //   name: user,
  //   //   text: text_post,
  //   //   enjoy: 0,
  //   // };
  //   // // Método é responsável pela criação e manipulação do relatório da tabela.
  //   // // ref. referencia o banco de dados.
  //   // // set. Para setar os dados na URL anterior, e o post se torna uma promisse.
  //   // firebase.database().ref('post/' * post.name).set(post).then(() => {
  //   //   addScreenCard(post);
  //   // });
  // }

  // function deletPost(id) {

  // }

  // function enjoyPost(id) {

  // }

  // function unlikePost(id) {

  // }

  // // DOM
  // container.addEventListener('', () => {

  // });

  // // // Adicionar card na tela
  // // information é o objeto contendo os dados do post
  // function addScreenCard(information){
  //     // header do post
  //     let header = document.createElement('h2');
  //     header.innerHTML = information.name;
  //     header.classList.add('post-title');

  //     // content do post
  //     let content = document.createElement('p');
  //     content.classList.add('post-text');
  //     content.innerText = information.text_post;

  //     // button do post
  //     let inner = document.createElement('div');
  //     inner.classList.add('row');

  //     // button adicionar
  //     let button_add = document.createElement('button');
  //     button_add.classList.add('btn');
  //     button_add.setAttribute('onclick', 'curtir(' + information.id + ')');
  //     button_add.innerText = '+';
  //     inner.appendChild(button_add);

  //     // Contador de curtidas
  //     let counter = document.createElement('span');
  //     counter.innerHTML = information.enjoy;
  //     counter.classList.add('text-center');
  //     inner.appendChild(counter);

  //     // Botão de subtrair
  //     let button_sub = document.createElement('button');
  //     button_sub.classList.add('btn', 'btn_link');
  //     button_sub.setAttribute('onclick', 'descurtir(' + information.id + ')');
  //     button_sub.innerText = '-';
  //     inner.appendChild(button_sub);

  //     // botão excluir
  //     let button_del = document.createElement('button');
  //     button_del.classList.add('btn', 'btn_danger');
  //     button_del.setAttribute('onclick', 'deletar(' + information.id + ')');
  //     button_del.innerText = 'X';
  //     inner.appendChild(button_del);

  //     // Post
  //     let post = document.createElement('div');
  //     post.classList.add('post');
  //     post.id = information.id
  //     let post_body = document.createElement('div');
  //     post_body.classList.add('post-body');

  //     post_body.appendChild(header);
  //     post_body.appendChild(content);
  //     post_body.appendChild(inner);
  //     post.appendChild(post_body);

  //     // Iserir no container
  //     post_container.appendChild(post);

  // }

  // function cleanField() {
  //   post.querySelector('#post').value = '';
  // }

  // function creatPost() {
  //   const name = post.querySelector('#name').value;
  //   const newPost = post.querySelector('#post').value;

  //   const newPosts = post.createElement('p');
  //   newPosts.innerText = name;

  //   if (name !== '' || newPost !== '') {
  //     post.append(newPosts);
  //     cleanField();
  //   } else {
  //     alert('Opa! Você esqueceu de preencher algum campo');
  //   }
  // }

  // function deletePost() {
  //   btnDelete.addEventListener('click', () => {

  //   })
  // }

  return post;
};
