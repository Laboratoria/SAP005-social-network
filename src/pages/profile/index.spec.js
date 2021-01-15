import { Profile } from './index.js';
import * as services from '../../services/index.js';

describe('Profile', () => {
  beforeEach(() => {
    services.delUser = jest.fn(() => Promise.resolve(true));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be a function', () => {
    expect(typeof Profile).toBe('function');
  });
  it('shoul return profilepag', () => {
    expect(Profile()).toMatchSnapshot();
  });
  it('should delete user', () => {
    const profileTest = Profile();
    const delBtn = profileTest.querySelector('#deleteuser');
    delBtn.dispatchEvent(new Event('click'));
    expect(services.delUser).toHaveBeenCalled();
  });
  it('should logout user', () => {
    const profileTest = Profile();
    const outBtn = profileTest.querySelector('#logOut');
    outBtn.dispatchEvent(new Event('click'));
    expect(services.logOut).toHaveBeenCalled();
  });
});
