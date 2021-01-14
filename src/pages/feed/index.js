import {  Navigation, newPost, getPosts } from "/services/index.js"

export const Feed = () => {
  const nav = Navigation();
  window.onload = getPosts();

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav);

  const content = () => {
    const contentElement = document.createElement('div');
    contentElement.innerHTML = `
    <h1>Post</h1>
    <form>
      <textarea name="" id="textPost" cols="30" rows="5" placeholder="escreva aqui..."></textarea>
      <button id="creatPost" >Post</button>
    </form>
    <div id="feedPost"></div>
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
    (getPosts());
  });

  const botaoLike = rootElement.querySelectorAll('.curtir');
  console.log(botaoLike);
  botaoLike.forEach((button) => {
    button.addEventListener('click', (e) => {
      sendLike(e);
    });
    console.log(sendLike);
  });

  return rootElement;
};
