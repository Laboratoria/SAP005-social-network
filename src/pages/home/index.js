export const Home = () => {
  const rootElement = document.createElement('div');
  const bottomNav = document.querySelector('#bottom-nav');
  bottomNav.style.display = 'none';

  rootElement.innerHTML = `
    <p>Página inicial</p>
  `;
  return rootElement;
};
