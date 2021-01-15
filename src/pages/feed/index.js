import {  Navigation, newPost, getPosts, post} from "/services/index.js"

export const Feed = () => {
  const nav = Navigation();
  window.onload = getPosts();

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  const content = () => {
    const contentElement = document.createElement('div');
    contentElement.innerHTML = `
    <div class="containerFeed">
     <h1> feed </h1>
     <form>
      <textarea id="textPost" cols="30" rows="5" placeholder="escreva aqui..."></textarea>
      <button id="creatPost" >Post</button>
     </form>
     <div id="feedPost"></div>
    </div>
    `;
    return contentElement;
  };
  rootElement.appendChild(content());

  const textPost = rootElement.querySelector("#textPost");
  const creatPost = rootElement.querySelector("#creatPost");

  creatPost.addEventListener("click", (event) => {
    event.preventDefault();
    const saveTextPost = textPost.value;
    newPost(saveTextPost);
    getPosts();
  });
  return rootElement;
};
