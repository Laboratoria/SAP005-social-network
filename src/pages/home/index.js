export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');

  const singupHtml = `
    <h1>Welcome!</h1>
    <button id="btn-login">Login</button> 
    <button id="btn-singup">SingUp</button>`;

  rootElement.innerHTML = singupHtml;
  return rootElement;
};
