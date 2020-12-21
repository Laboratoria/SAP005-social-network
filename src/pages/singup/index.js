import { createUser } from "services/index.js"

export const  = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Sing up!</h1>
  `;
  return rootElement;
};

createUser();
