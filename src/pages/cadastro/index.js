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
          
          <button id="criarConta">Cadastrar e entrar</button>

         
     
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
    window.history.pushState(null, null, '/home');
    renderPage();
    
});

//var user = firebase.auth().currentUser;
//var name;

//if (user != null) {
  //name = user.displayName;
  // email = user.email;
  // photoUrl = user.photoURL;
  // emailVerified = user.emailVerified;
  // uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
//}

return rootElement;
  };


 








     