export const errors = (errorCode) => {
  let message = ' ';
  switch (errorCode) {
    case 'auth/email-already-exists':
<<<<<<< HEAD
      message = 'bla';
      break;
    case 'auth/email-already-in-use':
      message = 'bla bla';
      break;
    case 'auth/user-not-found':
      message = 'bla bla';
      break;
    case 'auth/uid-already-exists':
      message = 'bla bla bla';
      break;
    case 'ha':
      message = 'lalala';
      break;
    case '':
      message = 'losoododd';
      break;
    default:
      console.log('Não implementado');
  }

  return message;
=======
      message = 'E-mail já existe na Deva';
      break;
    case 'auth/email-already-in-use':
      message = 'E-mail já está em uso na Deva';
      break;
    case 'auth/user-not-found':
      message = 'Usuário não encontrado';
      break;
    case 'auth/uid-already-exists':
      message = 'UID já existe';
      break;
    default:
      message = 'Não implementado';
  }

  console.log(message);
>>>>>>> 263316b718d572e74e080f14d4f24faa29724eb6
};
