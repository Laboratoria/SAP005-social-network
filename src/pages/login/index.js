export const Login = () => {

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="container-login">

    <img src="./img/logo.png" class="logo">
    <img src="./img/pessoas.png" class="people">


    <div id="root">
     <h4>Your Pet's ally !!!</h4>
    </div>
<<<<<<< HEAD
1270g
hfgjn    <section class="email">

    <h3> <Label>E-mail:</Label>
      <input type="text" id="e-mail">
    </h3>
  </section>
=======
    <section id="form">
    <div class="email">
  
    <h3> <Label>E-mail:</Label>
      <input type="text" id="e-mail">
    </h3> 
  </div>
>>>>>>> 803b0fd11dbc66e121db957ac7eee5ddc94941e5

  <div class="password">
    <h3>
      <Label>Senha:</Label>
<<<<<<< HEAD
      <input type="password" id="password">
    </h3>
=======
      <input type="password" id="password"> 
    </h3> 
    </div>
>>>>>>> 803b0fd11dbc66e121db957ac7eee5ddc94941e5
  </section>

  <section class"buttons">
    <h3>
      <button id="register" class="register">Cadastrar</button>
      <button id="login" class="login">Login</button>
    </h3>
  </section>
  </div>

  `;
const registerButton= rootElement.querySelector("#register")
const loginButton= rootElement.querySelector("#login")

    registerButton.addEventListener( "click",  () => {
    console.log ("oi")
    
    
        // alert("Cadastrado com sucesso");
         
      }); 
    
    

    loginButton.addEventListener( "click",   () => {   
      console.log ("sim")  
      
    }) 

    
  return rootElement;
};

