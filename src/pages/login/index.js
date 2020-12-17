export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="container-login">
  
    <img src="./img/logo.png" class="logo">
    <img src="./img/pessoas.png" class="people">
  
  <section>
    <div id="root">
     <h4>Your Pet's ally !!!</h4>
    </div>
  
    <form class= "Register">
    
      <Label>E-mail:</Label>
      <input type="text" id="e-mail">
   </p>
  
  <p>
      <Label>Senha:</Label>
      <input type="password" id="password"> 
  </p>
  
  <p>
      <button onclick="register ()">Cadastrar</button>
      <button onclick="login ()">Login</button>
  </p>
    
  </section> 
  </div> 

  `;
  return rootElement;
};
