import { Post } from './index.js';
import * as services from '../../services/index.js';

describe('Post', () => {
  beforeEach(() => {
    services.loginWithEmail = jest.fn(() => Promise.resolve(true));
    services.loginGoogle = jest.fn(() => Promise.resolve(true));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof Post).toBe('function');
  });
  it('shoul return PostPage', () => {
    expect(Post()).toMatchSnapshot();
  });
});

  it('should click submmit button', () => {
    const homeTest = Home();
    const btn = homeTest.querySelector('#submit-home');
    homeTest.querySelector('#email-input').value = 'email@teste1.com';
    homeTest.querySelector('#password-home').value = 'teste1';
    btn.dispatchEvent(new Event('click'));
    expect(services.loginWithEmail).toHaveBeenCalledWith('email@teste1.com', 'teste1');
  });
  it('should login with google', () => {
    const homeTest = Home();
    const autGoogle = homeTest.querySelector('#authGoogle');
    autGoogle.dispatchEvent(new Event('click'));
    expect(services.loginGoogle).toHaveBeenCalled();
  });
  