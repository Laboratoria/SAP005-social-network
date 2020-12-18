export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1 class='introduction'>Olá, mundo!</h1>
  `;
  return rootElement;
};
