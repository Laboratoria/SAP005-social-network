import { Profile } from './index.js';
// import {currentUser} from '../../services/index.js';

describe('Profile', () => {
  it('should be a function', () => {
    expect(typeof Profile).toBe('function');
  });
  it('shoul return profilepag', () => {
    expect(Profile()).toMatchSnapshot();
  });
});
