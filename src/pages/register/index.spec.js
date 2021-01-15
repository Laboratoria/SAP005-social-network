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
  it('shoul return registerPage', () => {
    expect(Register()).toMatchSnapshot();
  });
  it('should complete the register', async () => {
    const registerTest = Register();
    const btnRegister = registerTest.querySelector('#btnRegister');
    btnRegister.dispatchEvent(new Event('click'));
    expect(services.createProfile).toHaveBeenCalled();
  });
});
