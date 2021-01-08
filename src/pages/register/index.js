import { createUser } from '../../services/index.js';

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
      <label for="talents"> Qual seu talento? </label>
      <input type="Talents" name="talents" id="talents" placeholder= " Digite seu talento" >
    </div>
      <div clas="half-box spacing">
        <label for="password"> Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha">
      </div>
      <div clas="half-box">
        <label for="passconfirmation"> Confirme sua senha</label>
        <input type="password" name="passconfirmation" id="passconfirmation" placeholder="Confirme sua senha">
      </div>    
      <div clas="full-box">
        <input type="submit" id="btn-submit" value="Cadastrar">
      </div> 
    </form>
  
  <p class="error-validation template"></p>
  </div>
    `;


  class Validator{

    constructor(){
      this.validations = [

      ]
    }
    validate(form){ //iniciar validação em todos os campos

      let inputs =form.getElementsByTagName('input');
      console.log (inputs);

      let inputsArray = [...inputs];
      console.log (inputsArray);

    }
    
    
  }  

  const form = rootElement.querySelector('#register-form');
  const submit = rootElement.querySelector('#btn-submit');

  submit.addEventListener('click', (e) => {
   
    e.preventDefault();

    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    const name = rootElement.querySelector('#name').value;
    const lastName = rootElement.querySelector('#lastname').value;

      if  '#email' = emailTextField.text, password = passwordTextField.text{
        Auth.auth().createUser(withEmail: email, password: password, completion:{ user, error in
           if let firebaseError = error{
                print(firebaseError.localizedDescription)
                return
            }
          print("Usuário cadastrado")
    /* se email digitado igual email return cadastrado
nos imput colocar obrigatório email e senha */

    createUser(email, password, name, lastName);
  });

  return rootElement;
};
