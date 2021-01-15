import { Login } from './index.js';
import * as services from '../../services/index.js';

services.SignIn = jest.fn(() => Promise.resolve(true));
services.SingInGoogle = jest.fn(() => Promise.resolve(true));

describe('Login', () => {
  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });

  it('Sing In Click button', () => {
    Login().querySelector('.btn-login').dispatchEvent(new Event('click'));
    expect(services.SingIn).toHaveBeenCalled();
  });

  it('click on the Google Sing In button', () => {
    Login().querySelector('.btn-google').dispatchEvent(new Event('click'));
    expect(services.SingInGoogle).toHaveBeenCalled();
  });
});
