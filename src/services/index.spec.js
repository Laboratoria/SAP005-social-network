import { loginWithEmail } from './index.js'; // Aqui é o index do services

describe('services', () => {
  it('should call firebase', () => {
    loginWithEmail('email', 'password');
    expect(firebase.auth).toBeCalled();
  });
});
