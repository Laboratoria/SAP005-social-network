import {onNavigate} from "../../utils/history.js"
export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <div>
      <h1>Login!</h1>
      <button id="homeFeed" class="">Ok</button>
      </div>
  `;
  const bottunLogin = rootElement.querySelector("#homeFeed")
  bottunLogin.addEventListener("click", () => {
    onNavigate("/services")
  })
  return rootElement;
};
