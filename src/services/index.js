import { onNavigate } from "../../utils/history.js"

export const Navigation = () => {
  const navigation = document.createElement('div');
  navigation.innerHTML = `
   <ul class='navMenu'>
     <li><img src="images/fireHome.png"  id="feed" class="menu-icon"></li>
     <li><img src="images/bell.png" id="notification" class="menu-icon"></li>
     <li><img src="images/profile.png" id="profile" class="menu-icon"></li>
     <li><img src="images/email.png" id="message" class="menu-icon"></li>
     <li><img src="images/off.png" id="sair" class="menu-icon logOut"></li>
   </ul>
    `;
  return navigation
}

export const Feed = () => {
  const menu = Navigation()

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <nav class='navigation'>${menu.innerHTML}</nav>
  <h1>Post teste!</h1>
  `;

  const bottunNotification = rootElement.querySelector("#notification")
  bottunNotification.addEventListener("click", () => {
    onNavigate("/notification")
  });

  const bottunPorfile = rootElement.querySelector("#profile")
  bottunPorfile.addEventListener("click", () => {
    onNavigate("/profile")
  });

  const bottunMessage = rootElement.querySelector("#message")
  bottunMessage.addEventListener("click", () => {
    onNavigate("/message")
  });
  
  return rootElement;
};

export const Profile = () => {
  const menu = Navigation()

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <nav class='navigation'>${menu.innerHTML}</nav>
  <h1>Perfil!</h1>
  `;
  const bottunNotification = rootElement.querySelector("#notification")
  bottunNotification.addEventListener("click", () => {
    onNavigate("/notification")
  });

  const bottunFeed = rootElement.querySelector("#feed")
  bottunFeed.addEventListener("click", () => {
    onNavigate("/feed")
  });

  const bottunMessage = rootElement.querySelector("#message")
  bottunMessage.addEventListener("click", () => {
    onNavigate("/message")
  });

  return rootElement;
};

export const Notification = () => {
  const menu = Navigation()

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <nav class='navigation'>${menu.innerHTML}</nav>
  <h1>Notificação!</h1>
  `;

  const bottunFeed = rootElement.querySelector("#feed")
  bottunFeed.addEventListener("click", () => {
    onNavigate("/feed")
  });
  
  const bottunPorfile = rootElement.querySelector("#profile")
  bottunPorfile.addEventListener("click", () => {
    onNavigate("/profile")
  });

  const bottunMessage = rootElement.querySelector("#message")
  bottunMessage.addEventListener("click", () => {
    onNavigate("/message")
  });

  return rootElement;
};

export const Message = () => {
  const menu = Navigation()

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <nav class='navigation'>${menu.innerHTML}</nav>
  <h1>Message!</h1>
  `;
  const bottunFeed = rootElement.querySelector("#feed")
  bottunFeed.addEventListener("click", () => {
    onNavigate("/feed")
  });
  
  const bottunPorfile = rootElement.querySelector("#profile")
  bottunPorfile.addEventListener("click", () => {
    onNavigate("/profile")
  });

  const bottunNotification = rootElement.querySelector("#notification")
  bottunNotification.addEventListener("click", () => {
    onNavigate("/notification")
  });

  return rootElement;
};