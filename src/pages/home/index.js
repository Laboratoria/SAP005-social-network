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
    
    if (textoPost.value === "") {
      alert("Digite alguma coisa!")
    } else {
      const feed = {
        post: textoPost.value,
        name: userName,
        uid: uid,
        date: new Date(),
        // time: new Date(),
      };
  
      firebase.firestore().collection('posts').add(feed).then(() => {
      });
  
      renderPage();
    }

    // const feed = {
    //   post: textoPost.value,
    //   name: userName,
    //   uid: uid,
    //   date: new Date(),
    //   // time: new Date(),
    // };

    // firebase.firestore().collection('posts').add(feed).then(() => {
    // });

    // renderPage();
  }

  function adicionaPostATela(informacao) {
    let postDiv = document.createElement('div');
    postDiv.classList.add("card-post");
    
    let nomeUser = document.createElement('h2');
    nomeUser.classList.add("nome-usuario");
    nomeUser.innerHTML = informacao.name;

    let conteudo = document.createElement('p');
    conteudo.classList.add("texto-post");
    conteudo.innerHTML = informacao.post;

    postDiv.appendChild(nomeUser);
    postDiv.appendChild(conteudo);

    feedArea.appendChild(postDiv);
  }
  

  firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(feed => {
      if (feed.type == "added") {

        adicionaPostATela(feed.doc.data(), feed.doc.id);
      };
    });
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

}

