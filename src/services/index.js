import { onNavigate } from "../../utils/history.js"

export const Navigation = () => {
  const navigation = document.createElement('nav');
  navigation.classList.add('navigation')
  navigation.innerHTML = `
   <ul class='navMenu'>
     <li><img src="images/fireHome.png"  id="feed" class="menu-icon"></li>
     <li><img src="images/bell.png"  id="notification" class="menu-icon"></li>
     <li><img src="images/email.png" id="message" class="menu-icon"></li>
     <li><img src="images/profile.png" id="profile" class="menu-icon"></li>
     <li><img src="images/off.png" id="sair" class="menu-icon logOut"></li>
   </ul>
  `;

  const bottunNotification = navigation.querySelector("#notification")
  bottunNotification.addEventListener("click", () => {
    onNavigate("/notification")

  });

  const bottunPorfile = navigation.querySelector("#profile")
  bottunPorfile.addEventListener("click", () => {
    onNavigate("/profile")
  });

  const bottunMessage = navigation.querySelector("#message")
  bottunMessage.addEventListener("click", () => {
    onNavigate("/message")
  });
  const bottunFeed = navigation.querySelector("#feed")
  bottunFeed.addEventListener("click", () => {
    onNavigate("/feed")
  });
  return navigation
}