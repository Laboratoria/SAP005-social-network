export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <div class="purple">
      <h1>Seja bem vido ao Security Pet!</h1>
      <img src="./img/logo.png" class="logo">
      <img src="./img/pessoas.png" class="logo">

      <div id="ally">
      <h4>Your Pet's ally !!!</h4>
      </div>
    </div>

  `;
  return rootElement;
};
