import { Home } from './about.js';
import { register, googleAccount } from './login.js';

describe('Home', () => {
  it('should be a function', () => {
    expect(typeof Home).toBe('function');
  });
});

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