//import { Sign } from "../../services/index.js"
// import { onNavigate } from "../../utils/history"



// document.getElementById("sign").addEventListener("submit", (e)=>{
//   e.preventDefault()
//   Sign()

// })

export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class=" containerLogin">
  <H2>Login</H2>
  <form class="formLogin id="formLogin"  >
  <input type="email" placeholder="Email" id="emailSign"></input>
  <input type="password" placeholder="Senha" id="passwordSign" ></input>
  <button type="submit" id="sign">login</button>
  <button type="submit" id="loginGoogle">login com google</button>
  <button id="cadastrar" >cadastre-se</button>
  </form>
  </div>
  `;
  return rootElement;
};

