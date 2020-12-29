
export const Cadastro = () => {
  // Coloque sua página
  const pageCadastro = `
    <section class="form">
     
      <form class=" cadastro">
        <div>
          <input class= "input "type="text" id="user-name" placeholder="Name"/>
        </div>
        <div>
          <input type="email" id="user-email" placeholder="Email"/>
        </div>
        <div>
          <input type="password" id="user-password"  placeholder="Senha"/>
        </div>
          <button id="btnEmail">Entrar</button>
          <button id="criarConta">Criar Conta</button>
     
      </form>
      

      
    </section>
  `;

  const rootElement = document.createElement('div');
  rootElement.innerHTML = pageCadastro;

  


  
  



  return rootElement;
};







     