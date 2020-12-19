// exporte suas funções


export const createUser = () => {
  const email = "rafa@rafa.com"
  const password = "123123"

  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("usuário criado")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim")

  });
};

export const Sign = () => {
  const email = "ka@ka.com"
  const password = "123456"
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("usuário Logado")
  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("deu ruim")
  });
};