import { Post } from '../../components/post/index.js';
import { Navbar } from '../../components/navbar/index.js';

export const Feed = () => {
  const feedBody = document.createElement('div');

  feedBody.innerHTML = `
    <header>
      <h1 class="title">Livros</h1>
    </header>

    <main class="feed-main">

    </main>
  `;

  feedBody.appendChild(Navbar());

  return feedBody;
};
