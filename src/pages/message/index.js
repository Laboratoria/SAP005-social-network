import { Navigation } from "/services/index.js"

export const Message = () => {
  const nav = Navigation()

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav)

  const content = () => {
    const contentElement = document.createElement('div')
    contentElement.innerHTML = `
      <h1>Message!</h1>
      `;
    return contentElement;
  };
  rootElement.appendChild(content());

  return rootElement;
};