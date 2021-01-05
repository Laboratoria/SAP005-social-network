import { onNavigate } from "../../utils/history.js"

export const Nav = () => {
  const oi = document.createElement('div');
  oi.innerHTML = `
    <h1 id="profile">Perfil!</h1>
    <p>meu nome é ana </p>
    `;
  return oi
}

export const Feed = () => {
  const teste = Nav()

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <h1>Post teste!</h1>
  <nav>${teste.innerHTML}</nav>
  `;

  const bottunPorfile = rootElement.querySelector("#profile")
  bottunPorfile.addEventListener("click", () => {
    onNavigate("/services/profile")

  });

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