import { Home } from './index.js';
// import {currentUser} from '../../services/index.js';

describe('Home', () => {
  it('should be a function', () => {
    expect(typeof Home).toBe('function');
  });
  it('shoul return homepag', () => {
    expect(Home()).toMatchSnapshot();
  });
});
