import { Register } from './index.js';
import * as services from '../../services/index.js';

describe('Register', () => {
  beforeEach(() => {
    services.createProfile = jest.fn(() => Promise.resolve(true));
    services.confirmEmail = jest.fn(() => Promise.resolve(true));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof Register).toBe('function');
  });
  it('shoul return registerpag', () => {
    expect(Register()).toMatchSnapshot();
  });
  it('should click submmit button register', () => {
    const registerTest = Register();
    const btnRegister = registerTest.querySelector('#btnRegister');
    registerTest.querySelector('#email').value = 'email@teste1.com';
    registerTest.querySelector('#password').value = 'teste1';
    btnRegister.dispatchEvent(new Event('click'));
    expect(services.createProfile).toHaveBeenCalledWith('email@teste1.com', 'teste1');
  });
});
