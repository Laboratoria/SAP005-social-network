import { Register } from './index.js';
// import * as services from '../../services/index.js';

describe('Register', () => {
  it('should be a function', () => {
    expect(typeof Register).toBe('function');
  });
  it('shoul return registerpag', () => {
    expect(Register()).toMatchSnapshot();
  });
});
