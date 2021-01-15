import { Home } from './about.js';
import { register, googleAccount } from './login.js';
import { emailLogin } from '../../services/index.js';
import * as services from '../../services/index.js';


describe('emailLogin', () => {
  it('should be a function', () => {
    expect(typeof Home).toBe('function');
  });
})
// it ('should call Firebase', () => {
//   emailLogin();
//   expect(firebase.aut(signInWithpopup)).toBeCalled();
//   expect(emailLogin()).toBe(true);
// };

describe('register', () => {
  it('should be a function', () => {
    expect(typeof register).toBe('function');
  });
});

describe('googleAccount', () => {
  it('should be a function', () => {
    expect(typeof googleAccount).toBe('function');
  });
});