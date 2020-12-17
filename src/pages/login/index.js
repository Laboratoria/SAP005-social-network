export const Login = () => {

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class="container-login">
  
    <img src="./img/logo.png" class="logo">
    <img src="./img/pessoas.png" class="people">
  
  
    <div id="root">
     <h4>Your Pet's ally !!!</h4>
    </div>
  
    <section class="email">
  
    <h3> <Label>E-mail:</Label>
      <input type="text" id="e-mail">
    </h3> 
  </section>

  <section class="password">
    <h3>
      <Label>Senha:</Label>
      <input type="password" id="password"> 
    </h3> 
  </section>

  <section>
    <h3>
      <button class="register" onclick="register ()">Cadastrar</button>
      <button class="login" onclick="login ()">Login</button>
    </h3>
  </section>
  </div> 

  `;
  return rootElement;
};

