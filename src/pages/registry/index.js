import { onNavigate } from "../../utils/history.js"
export const Registry = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
     <div class="container-login dysplay-template">
         <div class="box-login">
             <img src="images/olimpo.png" class="login-icon" id='homeFeed'> 
             <form  id ="formLogin" class="login">
                 <h1 >Registre-se!</h1>
                 <input  class='btn'  type='name', placeholder='Nome' >
                 <input id='txtEmail' class='btn' type='email', placeholder='Email' >
                 <input id='txtPassword' class='btn'type='password' placeholder='Senha' autocomplete="off" >   
                 <button id='login-btn' class='buttonPage'> Criar conta </button>
             </form>
         </div>
     <div>
    `;
  

  const bottunLogin = rootElement.querySelector("#homeFeed")
  bottunLogin.addEventListener("click", () => {
    onNavigate("/login")
  })
  
  return rootElement;

};

