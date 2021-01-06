export const errors = (errorCode) => {
  let message = ' ';
  switch (errorCode) {
    case 'auth/email-already-exists':
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
};
