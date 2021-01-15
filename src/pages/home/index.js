export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');

  const singupHtml = `
    <h1 clas="title">Welcome!</h1>
    <div class="container-button">
    <button id="btn-login">Login</button> 
    <button id="btn-singup">SingUp</button>
    </div>`;

  rootElement.innerHTML = singupHtml;
  return rootElement;
};
