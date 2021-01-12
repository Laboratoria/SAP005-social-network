import { Navigation } from "/services/index.js"

export const Feed = () => {
  const nav = Navigation();

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  const content = () => {
    const contentElement = document.createElement('div');
    contentElement.innerHTML = `
    <h1>Post</h1>
    <form>
      <textarea name="" id="textPost" cols="70" rows="5" placeholder="escreva aqui..."></textarea>
      <button id="creatPost" >Post</button>
    </form>
    <p id="outputPost"></p>
    `;
    return contentElement;
  };
  rootElement.appendChild(content());

  const docFirestore = firebase.firestore();
  const docRef = docFirestore.doc("post/postData");

  const textPost = rootElement.querySelector("#textPost");
  const creatPost = rootElement.querySelector("#creatPost");

  const outputPost = rootElement.querySelector("#outputPost");

  creatPost.addEventListener("click", (event) => {
    event.preventDefault();
    const saveTextPost = textPost.value;
    console.log("post: " + saveTextPost);

    const user = firebase.auth().currentUser;
    const uid = user.uid
    firebase.firestore().doc(`/post/${uid}`).set({
      name: user.displayName,
      text: saveTextPost,
    });



    // docRef.set({
    //  name: firebase.auth().currentUser.displayName,
    //   textPost: saveTextPost
    // }).then(() => {
    //   docRef.get().then(function(doc){
    //     if(doc && doc.exists){
    //       const myData = doc.data();
    //       outputPost.innerHTML = myData.textPost;
    //     }
    //   }).cath((error) => {
    //     console.log("oh no!", error)
    //   })
    // })
  });

  return rootElement;
};
