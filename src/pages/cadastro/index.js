import { Conta} from '../../services/index.js';
import { renderPage } from '../../router.js';

export const Cadastro = () => {
  
  const pageCadastro = `
    <section class="form">
    
     
      <form class=" cadastro">
      <h1>Criar uma nova conta</h1>
        <div>
          <input class= "input "type="text" id="inputName" placeholder="Nome"/>
        </div>
        <div>
          <input type="email" id="inputEmail" placeholder="Email ex:email@email.com.br"/>
        </div>
        <div>
          <input type="password" id="inputSenha"  placeholder="Senha"/>
        </div>
          
          <button class="link" id="criarConta"> Cadastrar </button>

     
      </form>
    </section>
  `;

  
  const rootElement = document.createElement('div');
  rootElement.innerHTML = pageCadastro;

  const criarConta = rootElement.querySelector('#criarConta');
  

  criarConta.addEventListener('click', (event) => {
    event.preventDefault();

    let name  = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let senha = document.getElementById('inputSenha').value;
    Conta(email,senha, name);
    alert('Usuario criado com sucesso, faça o login');
    window.history.pushState(null, null, '/');
    renderPage();
   
    
});


return rootElement;
  };


 








     