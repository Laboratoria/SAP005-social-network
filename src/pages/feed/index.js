// import { template } from "@babel/core";

export const Feed = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  
  const postHtml= `
    <div>
      <h1 class="feed">Account created successfully! Feed!</h1>
      <form class="form-post" id="form-post">
        <input class="text-post" id="text-post" type="textarea">
        <button class="btn-submit" id="btn-submit" type="submit">Submit</button>
      </form>
      <div class="load-posts" id="load-posts">
      </div>
    </div>
  `;

  rootElement.innerHTML = postHtml;

  const loadPosts = rootElement.querySelector('.load-posts');

  const createPost = rootElement.querySelector('.form-post');
  createPost.addEventListener('click', (e) => {
    e.preventDefault();
    const textPost = document.querySelector('.text-post').value;
    const post = {
      text: textPost,
      user_id: `${firebase.auth().currentUser.email}`,
      likes: 0,
      comments: []
    }
    const collectionPosts = firebase.firestore().collection("posts")

    collectionPosts.add(post)
    
  })
  
  //VERSÃO KARINA
  function showPosts (data) {
    const templatePosts = `
      <div>
      <p> ${data.post} </div>
      </div>
    `

    loadPosts.innerHTML += templatePosts
  }

  firebase.firestore().collection(posts)/*.orderBy("date", "desc")*/.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((post) => {
      if (post.type ==="added") {
        showPosts(post.doc.data.doc.id)
      }
    })
  })
  
  //VERSÃO DANIEL
  // function addPost(post) {
  //   const templatePost = `
  //     <li id="${post.id}">
  //       ${post.data().text} ❤️ ${post.data().likes}
  //     </li>
  //   `
  //   document.querySelector('.load-posts').innerHTML += templatePost;
  // }

  // function loadPosts() {
  //   const collectionPosts = firebase.firestore().collection("posts")
  //   document.querySelector('.load-posts').innerHTML = "Carregando..."
  //   collectionPosts.get().then(snap => {
  //     document.querySelector('.load-posts').innerHTML = " "
  //     snap.forEach(post => {
  //       addPost(data)
  //     })
  //   })
  //   return loadPosts();
  // }

  return rootElement;
  
};


