// importamos la funcion que vamos a testear
import { emailLogin } from './index';
import * as service from'../../services/index.js';

service.SignIn = jest.fn(() => Promisse.resolve(true));
service.signInGoogle = jest.fn(() => Promise.resolve(true));

describe('emailLogin', () => {
  it('should be a function', () => {
    expect(typeof emailLogin).toBe('function');
  });
});

