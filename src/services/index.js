// exporte suas funções


/*export const myFunction = () => {
  // seu código aqui
  console.log();
};

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

submit.addEventListener('click', function(e){

  e.preventDefault();
  console.log('funcionou');
  console.log('oi');
}*/

export const createUser = () => {
  const email = ""
  const password = ""

  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("usuário criado")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim", errorMessage)

  });
};



export const Sign = () => {
  
  const email = document.getElementById("emailSign").value
  const password = document.getElementById("passwordSign").value

  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("usuário Logado")
  
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("deu ruim", errorMessage, errorCode)
  });
};

