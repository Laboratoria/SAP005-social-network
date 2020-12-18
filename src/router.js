import { Home } from './pages/home/index.js';
import { Feed } from './pages/feed/index.js';

const root = document.querySelector('#root');

document.querySelector('#feed').addEventListener('click', () => {
  root.innerHTML = '';
  root.appendChild(Feed());
});

document.querySelector('#home').addEventListener('click', () => {
  root.innerHTML = '';
  root.appendChild(Home());
});
