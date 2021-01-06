// import { Login } from './pages/login/index.js';

export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <button class='logOut' id='sgnOutBtn' type="submit">Logout</button>
      <h1>Olá, mundo!</h1>
  `;

  const logoutButton = rootElement.querySelector('#sgnOutBtn')
  logoutButton.addEventListener('click', (e)=>{
   e.preventDefault();
   firebase.auth().signOut();
  });

  return rootElement;
};
