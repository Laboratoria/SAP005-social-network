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
  <div id="main-container" >
    <h1>Login</h1>
    <form id="registrer-form">
      <div clas="full-box">
        <label for="email"> E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu email">
      </div>
     
      <div clas="half-box spacing">
        <label for="password"> Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha">
      </div>
     
      <div clas="full-box">
        <input type="submit" id="btn-submit" value="Cadastrar">
      </div> 
    </form>
  
  
  </div>
  `;
  return rootElement;
};

