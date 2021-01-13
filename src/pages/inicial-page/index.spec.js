import { Login } from './index.js';
import { Home } from './about.js';

describe('Login', () => {
  it('should be a function', () => {
    expect(typeof Login).toBe('function');
  });
});

describe('Home', () => {
  it('should be a function', () => {
    expect(typeof Home).toBe('function');
  });
});

