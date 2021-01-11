// import { getPosts } from '../../services/index.js';

export const Feed = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div id="main-container">
    <h1>Posts</h1>
     <section id="registrer-form">
         <div class="full-box">
           
            <textarea type="text" name="postsAll" id="postsAll"></textarea>
         </div>
     </section>
  </div>
      `;

  // const submit = rootElement.querySelector('#btn-post');

  // submit.addEventListener('load', () => {
  //   const getPost = rootElement.querySelector('#postsAll');
  //   getPosts(getPost);
  // });

  return rootElement;
};
