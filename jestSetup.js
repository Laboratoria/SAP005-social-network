global.firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(),
  })),
};
