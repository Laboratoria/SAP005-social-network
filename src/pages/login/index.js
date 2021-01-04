import { userLogin, userLogout, gmailLogin } from "../../services/index.js";
import { onNavigate } from "../../utils/history.js";

export const Login = () => {
  const rootElement = document.createElement("div");
  rootElement.innerHTML = `
  <div id="main-container" >
    <h1>Login</h1>
    <form id="registrer-form">
      <div clas="full-box">
        <label for="email"> E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu email" required>
      </div>
     
      <div clas="half-box spacing">
        <label for="password"> Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha" required>
      </div>
     
      <div clas="full-box">
        <input type="submit" id="btn-submit-email" value="Entrar">
      </div> 

      <div clas="full-box">
        <input type="submit" id="btn-submit-gmail" value="Entrar com Gmail">
      </div> 

      <div clas="full-box">
      <input type="submit" id="btn-submit-logout" value="Logout">
      </div> 

    </form>

    <label for="agreement" id="agreement-label">Não está cadastrado? <a id="registerU">Registre-se.</a> </label>
  
  </div>
  `;



  let loginUser = rootElement.querySelector("#btn-submit-email");
  loginUser.addEventListener("click", function (e) {
    e.preventDefault();
    const email = rootElement.querySelector("#email").value;
    const password = rootElement.querySelector("#password").value;
    userLogin(email, password);
    onNavigate("/feed");
  });

  let gmail = rootElement.querySelector("#btn-submit-gmail");
  gmail.addEventListener("click", function (e) {
    e.preventDefault();
    gmailLogin();
    onNavigate("/feed");
  });


  let logoutUser = rootElement.querySelector("#btn-submit-logout");
  logoutUser.addEventListener("click", function (e) {
    e.preventDefault();
    userLogout()
    onNavigate("/");
  });

  let registerU = rootElement.querySelector("#registerU");
  registerU.addEventListener("click", function (e) {
    e.preventDefault();
    onNavigate("/register");
  });


  return rootElement;
};


