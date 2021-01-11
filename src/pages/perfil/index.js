import { createPost } from '../../services/index.js';

export const Perfil = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div id="main-container">
  <h1>Fale mais sobre você</h1>
  <form id="registrer-form">
   <div class="full-box">
     <label for="text"> Juliana </label>
     <input type="text" name="post" id="post" placeholder="Eu sou cantora há 12 anos...">
   </div>
   <div class="full-box">
     <input type="submit" id="btn-post" value="Publicar">
   </div> 
  </form>
  </div>
      `;

  const submit = rootElement.querySelector('#btn-post');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const post = rootElement.querySelector('#post').value;
    createPost(post);
  });

  return rootElement;
};
