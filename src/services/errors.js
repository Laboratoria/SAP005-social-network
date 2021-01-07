export const errors = (errorCode) => {
  let message = ' ';
  switch (errorCode) {
    case 'auth/email-already-exists':
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
      message = errorCode;
  }

  return (alert(message));
};
