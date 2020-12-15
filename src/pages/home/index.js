export const Home = () => {
  const container = document.createElement('div');
  container.classList.add('div-home');
  container.innerHTML = `
  <header>
  <h1>Meu Perfil</h1>
  </header>
  <div>
  <img src="">
  <h2>$</h2>
  <h3>$</h3>
  </div>
`;
  return container;
};