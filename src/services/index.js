// export const chamarNome = () => {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       document.querySelector('#userName').innerHTML =`Olá, ${user.displayName}`;
//     } else {
//       // No user is signed in.
//     }
//   });
// };

// export const adicionarPost = () => {
//   const feed = {
//     post: textoPost.value,
//     name: userName,
//     uid: uid,
//     date: new Date().toLocaleDateString(),
//     time: new Date().toLocaleTimeString(),

//   };

//   firebase.firestore().collection('posts-feed').add(feed).then(() => {
//     console.log('dados salvos');
//   });
// }

// function adicionaPostATela(informacao, id) {
//   let postDiv = document.createElement('div');
  
//   let nomeUser = document.createElement('h2');
//   nomeUser.classList.add("nome-usuario")
//   nomeUser.innerHTML = informacao.name;

//   let conteudo = document.createElement('p');
//   conteudo.innerHTML = informacao.post;

//   postDiv.appendChild(nomeUser);
//   postDiv.appendChild(conteudo);

//   feedArea.appendChild(postDiv);
// }

// export const puxarPost = () => {


//   firebase.firestore().collection('posts-feed').orderBy('date', 'desc').orderBy('time', 'desc').onSnapshot(snapshot => {
//     snapshot.docChanges().forEach(feed => {
//       if (feed.type == "added") {

//         adicionaPostATela(feed.doc.data(), feed.doc.id);
//       };
//     })
//   })
// }