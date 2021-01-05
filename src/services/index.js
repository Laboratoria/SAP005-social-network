// exporte suas funções
export const CreateUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      window.location.pathname = 'singup';
      response('Você está logado parça!');
    })
    .cath((error) => {
      error.alert('Reveja sua senha parça!');
    });
};

export const SingIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.trim(), password)
    .then((response) => {
      window.location.pathname = 'login';
      response('Bem-vindo!');
    })
    .catch((error) => {
      error.alert('Ocorreu um erro ao realizar login');
    });
};
