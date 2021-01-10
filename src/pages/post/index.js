// import { post,  } from './data.js';

export const Post = () => {
  const container = document.createElement('div');
  container.classList.add('div-post');
  container.innerHTML = `
    <div class='head-post' alt='Runner|Home'>Runner|Home</div>
    <figure class='logo-post'>
    <img src='./assets/logo_runners.png'alt='Logo Runners' id='logo'>
    </figure>
    <div>
    <img>
    </div>
          <div class="container">
              <input type='text' class='name' id='name'>
              <input type='text' class='post' id='post'>
              <button type='button' class='btn' id='btn'>Postar</button> 
          </div>
          <hr>
          <div class='post-container'>
          </div>
    
`;
  const post_container = container.getElementsByClassName('post-container')[0];
  const posts = [];
  const user = container.querySelector('#name');
  const textPost = container.querySelector('#post');
  const btnPost = container.querySelector('#btn');
  // const ref = firebase.database().ref('post/');

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

  function deletPost(id) {

  }

  function enjoyPost(id) {

  }

  function unlikePost(id) {

  }

  // DOM
  container.addEventListener('', () => {

  });

  // // Adicionar card na tela
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

  return container;
};
