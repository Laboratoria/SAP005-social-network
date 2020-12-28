import { Post } from '../../components/post/index.js';
import { Navbar } from '../../components/navbar/index.js';

export const Feed = () => {
  const feedBody = document.querySelector('#root');
  const feedHeader = document.createElement('header');

  feedHeader.innerHTML = `
    <h1 class="title">Livros</h1>
  `;

  feedBody.appendChild(feedHeader);
  feedBody.appendChild(Post());
  feedBody.appendChild(Navbar());

  return feedBody;
};
