// import { chamarNome, adicionarPost, puxarPost } from '../../services/index.js';
import { renderPage } from '../../router.js';


export const Home = () => {
  // Coloque sua página
  const pageHome = `
      <header>
      <button id="btnLogout">Sair</button>
        <h1 class="name-user" id="userName"></h1>
      </header>
      <main class="main-home">
        <section class="post-enviar">
          <textarea class="post" id="textoPost" placeholder="Conte sobre sua última cerveja..."></textarea>
          <button id="btnPost">Postar</button>
        </section>
        <section class="posts-enviados" id="feedArea">
        </section>
      </main>
    `;
  
  const rootElement = document.createElement('div');
  rootElement.innerHTML = pageHome;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.querySelector('#userName').innerHTML =`Olá, ${user.displayName}`;
    } else {
      // No user is signed in.
    }
  });

  
  const textoPost = rootElement.querySelector('#textoPost');
  const feedArea = rootElement.querySelector('#feedArea');
  const btnPost = rootElement.querySelector('#btnPost');
  btnPost.addEventListener("click", criarPost);

  function criarPost() {
    const uid = firebase.auth().currentUser.uid;
    const userName = firebase.auth().currentUser.displayName;
    //const like = firebase.auth().currentUser.Likes;
    
    if (textoPost.value === "") {
      alert("Digite alguma coisa!")
    } else {
      const feed = {
        post: textoPost.value,
        name: userName,
        uid: uid,
        date: new Date(),
        likes:0
        
        // time: new Date(),
      };
  
      firebase.firestore().collection('posts').add(feed).then(() => {
      });
  
      renderPage();
    }
  }

  function adicionaPostATela(informacao) {
    let postDiv = document.createElement('div');
    postDiv.classList.add("card-post");
    //adicionar atributo data para id dos cards
    
    let nomeUser = document.createElement('h2');
    nomeUser.classList.add("nome-usuario");
    nomeUser.innerHTML = informacao.name;

    let conteudo = document.createElement('p');
    conteudo.classList.add("texto-post");
    conteudo.innerHTML = informacao.post;

    let id = document.createElement('p');
    id.classList.add("texto-post");
    id.innerHTML = informacao.post;

    let likes = document.createElement('div');
    likes = document.createElement('button');
    likes.classList.add("btnLike");
    likes.innerHTML = "Curtir";

    likes.addEventListener('click', (event,) => {
      event.preventDefault();
      console.log("funciona botão");
      likes = likes.dataset.likes
      likePost(likes) 
      
    });

    postDiv.appendChild(nomeUser);
    postDiv.appendChild(conteudo);
    postDiv.appendChild(likes);
    

    feedArea.appendChild(postDiv);
  }
  
  function likePost(uid){
    let like = firebase.firestore().collection('posts').doc(uid);
    like.update({likes: firebase.firestore.FieldValue.increment(1)});
    console.log(uid);
  
    console.log("oi");
    //likes.innerHTML = "Curtir";
    //document.body.appendChild(likes);
    

    //likesDiv.appendChild(likes);

   // feedArea.appendChild(likesDiv);

  }
   
 /* const likesNumber = (post) => {
    let like = firebase.firestore().collection('posts').doc(post);
    like.update({likes: firebase.firestore.FieldValue.increment(1)});
    
  
    console.log(uid);
   
  }*/

  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(feed => {
      if (feed.type == "added") {

        adicionaPostATela(feed.doc.data(), feed.doc.id);
        
      };
    })
  })

  const btnLogout = rootElement.querySelector('#btnLogout');
  btnLogout.addEventListener("click", logout);

  function logout(){
    console.log("sextou bb")
    firebase.auth().signOut().then(function() {
      console.log("Sessão Encerrada!!")
      window.location = '/'
    })
    
  }
  


  return rootElement;
};