const updatelikePost = (postId) => {
  firebase.firestore().collection('posts').doc(postId).get()
    .then((doc) => {
      if (doc.data().likes === 0) {
        firebase.firestore().collection('posts').doc(postId).update({
          likes: firebase.firestore.FieldValue.increment(1),
        });
      } else {
        firebase.firestore().collection('posts').doc(postId).update({
          likes: firebase.firestore.FieldValue.increment(-1),
        });
      }
    });
};
const addLikeListener = (post) => {
  document.getElementById(post.id).addEventListener('click', () => {
    updatelikePost(post.id);
  });
};
function renderPost(user) {
  const postDiv = document.querySelector('.posted-text');// div onde oS postS ficarão
  // FUNCÃO QUE TRÁS A COLEÇÃO DO USER LOGADO
  firebase.firestore().collection('posts').where('userUID', '==', user.uid).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((post) => {
        const postData = post.data(); //  parâmetro firebase, data=dados.
        const postElement = `
        <ul>
          <li>${postData.name}</li>
          <li>
            <img src=${postData.image} alt="User Picture">
          <li>
          <li>${postData.date}</li>
          <li>${postData.text}</li> 
          <li>Like ${postData.likes}</li>
          <li>
            <input class="comment" placeholder="Comment" type="text">
            <button>Send</button>
          </li>
        </ul>`;
        postDiv.innerHTML += postElement;
        addLikeListener(post);
      });
    })
    .catch(() => {
      const postElement = `
      <ul>
        <li>Sem Posts</li> 
      </ul>`;
      postDiv.innerHTML += postElement;
    });
}
// FUNÇÃO QUE MANTÉM O ESTADO DE LOGADO
export const showPosts = () => firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    renderPost(user);
    return user;
  }
  return null;
});
  /* firebase.firestore().collection('posts').doc(postId).update({
  likes: firebase.firestore.FieldValue === 0 ? firebase.firestore.FieldValue.increment(1) :
  firebase.firestore.FieldValue.increment(-1),
  }); // if ternário */
