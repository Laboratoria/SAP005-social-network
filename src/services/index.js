import {onNavigate} from "../../utils/history.js"
export const Feed = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <h1>Post!</h1>
  <nav>${oi}</nav>
  `;
  return rootElement;
};

export const Profile = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <h1>Perfil!</h1>
  `;
  return rootElement;
};

export const Notification = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <h1>Notificação!</h1>
  `;
  return rootElement;
};

export const Message = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <h1>Message!</h1>
  `;
  return rootElement;
};

const oi = `
<h1>Post!</h1>
<p>meu nome é ana </p>
`;