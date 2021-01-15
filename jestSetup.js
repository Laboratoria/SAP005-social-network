global.firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(),
    currentUser: {
      displayName: 'Teste',
      email: 'teste@teste1.com',
      phoneNumber: '119999999999',
      photoURL: 'https://github.com/elis-ctrl.png',
      uid: 'teste123',
    },
    GoogleAuthProvider: jest.fn(() => Promise.resolve(true)),
    createUserWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
    sendEmailVerification: jest.fn(() => Promise.resolve(true)),
  })),
};
