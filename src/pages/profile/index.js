import { Navigation } from "/services/index.js"

export const Profile = () => {
  const nav = Navigation()

  const rootElement = document.createElement('div');
  rootElement.appendChild(nav)

  const content = () => {
    const contentElement = document.createElement('div')
    contentElement.innerHTML = `
    <img src="images/construc.gif" class="gif"> 
      `;
    return contentElement;
  };
  rootElement.appendChild(content());

  return rootElement;
};