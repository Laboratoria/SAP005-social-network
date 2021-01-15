import { emailLogin } from '../../services/index.js';
import * as services from '../../services/index.js';

describe('emailLogin', () => {
  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });
});
it ('should call Firebase', () => {
  emailLogin();
  expect(firebase.aut(signInWithpopup)).toBeCalled();
  expect(emailLogin()).toBe(true);

describe('Home', () => {
  it('should be a function', () => {
    expect(typeof Home).toBe('function');
  });
});