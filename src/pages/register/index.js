import {createUser} from "../../services/index.js"

export const Register = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div id="main-container">
     <h1>Efetue seu cadastro</h1>
     <form id="registrer-form">
      <div clas="full-box">
        <label for="email"> E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu email">
      </div>
      <div clas="half-box spacing">
        <label for="name"> Nome</label>
        <input type="name" name="name" id="name" placeholder="Digite seu nome" >
      </div>
      <div clas="half-box">
        <label for="lastname"> Sobrenome</label>
        <input type="lastname" name="lastname" id="lastname" placeholder="Digite seu sobrenome">
      </div>
      <div clas="half-box spacing">
        <label for="password"> Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha">
      </div>
      <div clas="half-box">
        <label for="passconfirmation"> Senha</label>
        <input type="password" name="passconfirmation" id="passconfirmation" placeholder="Confirme sua senha">
      </div>  
      <div clas="full-box">
        <input type="checkbox" name="agreement" id="agreement">
        <label for="agreement" id="agreement-label">Eu li e aceito os <a href="#">termos de uso.</a> </label>
      </div>   
      <div clas="full-box">
        <input type="submit" id="btn-submit" value="Cadastrar">
      </div> 
    </form>
  
  <p class="error-validation template"></p>
  </div>
    `;

    let submit = rootElement.querySelector("#btn-submit");
    
    submit.addEventListener('click', function(e){
      e.preventDefault();
      
      const email = rootElement.querySelector("#email").value
      const password = rootElement.querySelector("#password").value
      const name = rootElement.querySelector("#name").value
      const lastName = rootElement.querySelector("#lastname").value

      /* se email digitado igual email return cadastrado
nos imput colocar obrigatório email e senha*/


      createUser(email,password,name,lastName)
    });

    return rootElement;
  };