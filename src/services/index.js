// exporte suas funções
const email = "teste1@teste.com"
const password = "teste1234"
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => console.log("deu certo"))
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim")
  });

export const myFunction = () => {
  // seu código aqui
  console.log('Olá mundo!');
};
