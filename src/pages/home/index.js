import { onNavigate } from '../../utils/history.js';
export const Home = () => {
  //----- FUNÇÃO DE VERIFICAR SE O USUÁRIO TÁ LOGADO -----\\
  window.addEventListener("load", event => {
    event.preventDefault();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        onNavigate('/')
        loadPosts();
      } else {
        onNavigate('/login')
      }
    });
  })
  //------------ CRIANDO O TEMPLATE DA PÁGINA -------------\\ 
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <section class="timeline">
        <nav class="cover">
          <figure class="logo-feed-desktop">
            <button id="home" class="button-icon-feed"><img src="../../img/ada-cover.png"></button>
            <figcaption class="logo-name-desktop">[ Ada ]</figcaption>
          </figure>
          <ul class="nav-feed">
            <input type="search" id="search">
            <button id="profile" class="button-icon-feed"><img src="../../img/google.svg" height="35px" width="35px"></button>
            <button id="about" class="button-icon-feed"><img src="../../img/google.svg" height="35px" width="35px"></button>
            <button id="logout" class="button-icon-feed"><img src="../../img/logout.svg" height="25px" width="25px"></button>
          </ul>
        </nav>
        <section class="posts">
          <form id="postForm">
            <textarea spellcheck="true" maxlength="1000" class="text" id="postText" placeholder="O que você quer compartilhar?" required></textarea>
            <fieldset class="post-button"> 
              <label for="file">
                <figure>
                  <img src="../../img/icon-picture.svg" height="20px" width="20px">
                </figure>  
                <input type="file" id="file" accept="image/png, image/jpeg">
                </label>  
              <button type="submit" class="enter-button" id="publish">Publicar</button> 
            </fieldset>  
          </form  
        </section>
        <ul id="feed" class="posts">
        </ul>
      </section>
  `;
  //-------------- GUARDANDO TODOS OS INPUTS -------------\\
  const publish = rootElement.querySelector("#postForm");
  const logOut = rootElement.querySelector("#logout");
  //------------------- FUNÇÃO DE LOGOUT -------------------\\
  logOut.addEventListener("click", () => {
    const promise = firebase.auth().signOut();
    promise.then(() => { onNavigate('/login') });
  });
  //-------------- FUNÇÃO DE CRIAR PUBLICAÇÃO --------------\\
  publish.addEventListener("submit", event => {
    event.preventDefault();
    const text = rootElement.querySelector("#postText").value;
  //-------- TODO: pegar nome, avatar e ID do usuário --------\\
    const now = new Date;
    const post = {
      userID: "",
      userName: "",
      avatar: "",
      time: Date.now(),
      date: now.getDate(), 
      month: now.getMonth() + 1, 
      year: now.getFullYear(),
      text: text,
      picture: "",
      likes: 0,
      comments: []
    }
    const postCollection = firebase.firestore().collection("posts");
    postCollection.add(post).then(res => {
      rootElement.querySelector("#postText").value = "";
      loadPosts();
    })
  });
  return rootElement;
};
//------------- FUNÇÃO DE PRINTAR PUBLICAÇÃO -------------\\
//------- TODO: Completar os dados e ajustar o HTML -------\\
function printPosts(post) {
  const templatePost = `
    <ul class="postFeed" id="${post.id}">
      <figure class="avatar">
        ${post.avatar}
        <figcaption class="username">${post.userName}</figcaption>
      </figure>  
      <p class="text-posts">${post.data().text}</p>
      <p class="text-posts">${(post.data().comments)}</p>
      <p class="text-posts">${post.data().likes}</p>
      <p class="text-posts">${post.data().date}/${post.data().month}/${post.data().year}</p>
      <section class="buttons-posts"> 
        <button id="like" class="icon-post">
          <img src="../../img/heart.png" height="20px" width="20px"> 
        </button>
        <button id="delete" class="icon-post">
          <img src="../../img/recycle-bin.png" height="20px" width="20px"> 
        </button>
      </section>  
    </ul>
  `
//------------ CRIANDO O TEMPLATE DA PÁGINA -------------\\   
//---------------- EVENTOS QUE CHAMAM AS FUNÇÕES DO FEED ----------------\\
  document.querySelector("#feed").innerHTML += templatePost;
  document.querySelector("#like").addEventListener("click", likePost);
  document.querySelector("#delete").addEventListener("click", deletePost);
}
//---------------- FUNÇÃO DE CARREGAR TODAS AS PUBLICAÇÕES ----------------\\
function loadPosts() {
  const postCollection = firebase.firestore().collection("posts");
//---------------- TODO: Animação de carregando a página ----------------\\
  document.querySelector("#feed").innerHTML = "Carregando..";
  postCollection.get().then(snap => {
    document.querySelector("#feed").innerHTML = "";
    snap.forEach(post => {
      printPosts(post);
    });
  });
}
//---------------- FUNÇÃO DE EXCLUIR ----------------\\
//---------------- TODO: pegar a ID do post, confirmar que quer excluir, não tá funcionando (rever) ----------------\\
function deletePost(postID){
  console.log("o erro não é o botão")
  const postCollection = firebase.firestore().collection("posts");
  postCollection.doc(postID).delete().then(doc => {
   loadPosts(); 
  });
  deletePost();
}
//----------------- FUNÇÃO DE LIKE -----------------\\
//---- Só tá funcionando o botão do primeiro post ----\\
function likePost(){
  console.log("deixou o joinha");
}
//----------------- FUNÇÃO DE EDITAR ----------------\\

//------------------ HACKER EDITION ------------------\\
//----------------- FUNÇÃO DE COMENTAR ----------------\\
//-------------------- POSTAR IMAGEM -------------------\\
//------------------ PÚBLICO OU PRIVADO -----------------\\








//usar a referência coleção para printar os posts?
//var usersCollectionRef = db.collection('users');
//referência à um documento dentro da coleção: var alovelaceDocumentRef = db.doc('users/alovelace');
//público x privado: sub-coleção, coleção usuário, sub-coleção post público e sub-coleção post privado
/*
Estilo:
Login, colocar pra aparecer aquela coisinha branca com o nome do que aquele ícone vai
 redirecionar. Post: outline e margin button.
*/
/*
//-------------- Fazer a validação do registro ---------------\\
 const signUp = rootElement.querySelector('#signUp');
 signUp.addEventListener("click", e => {
   const email = rootElement.querySelector("#email").value;
   const password = rootElement.querySelector("#password").value;
   if (email === "" || password === "") {
     printMessageError(errorMessageEmptyInput);
   } else {
     const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
     promise
       .then(() => {
         onNavigate('/');
       }).catch(err => {
         const errorCode = err.code;
         const errorMessage = verifyErrorCode[errorCode];
         if (errorMessage == null) {
           errorMessage = err.Message;
         }
         printMessageError(errorMessage);
       });
   }
 });
 Dúvida:
 *Não haver usuários repetidos (só e-mail ou nome também?).
 Definir um formato de senha (número de caracteres, strings, number, etc.).
 E inserir uma mensagem de erro, caso a mensagem não atenda aos requisitos.
 //"auth/weak-password": "A senha é muito fraca.",
 */