import { Sign } from "../../services/index.js"

const email = document.getElementById('emailSign')
const password = document.getElementById('passwordSign')


let buttonLogin = document.getElementById("login");
buttonLogin.addEventListener("click",  Sign());


export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class=" containerLogin">
  <H2>Login</H2>
  <form class="formLogin"  >
  <input type="email" placeholder="Email" id="emailSign"></input>
  <input type="password" placeholder="Senha" id="passwordSign" ></input>
  <button type="submit" id="login">login</button>
  <button type="submit" id="loginGoogle">login com google</button>
  <button >cadastre-se</button>
  </form>
  </div>
  `;
  return rootElement;
};
