export const Feed = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <h1 class = 'feed'>Account created successfully!
    Feed!</h1>
  `;
  return rootElement;
};
