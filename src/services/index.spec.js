import {
  userProfile, CreateUser, saveProfile, SingIn, SingInGoogle, SignOut, IsCurrentUser,
} from './index.js';

describe('Google Sign Up', () => {
  it('should be a function', () => {
    expect(typeof userProfile).toBe('function');
  });
});

describe('Google Sign In', () => {
  it('should be a function', () => {
    expect(typeof saveProfile).toBe('function');
  });
});

describe('Sign In with Email and Password', () => {
  it('should be a function', () => {
    expect(typeof CreateUser).toBe('function');
  });
});

describe('Sign Out', () => {
  it('should be a function', () => {
    expect(typeof SingIn).toBe('function');
  });
});

describe('Create a Post', () => {
  it('should be a function', () => {
    expect(typeof SingInGoogle).toBe('function');
  });
});

describe('Get the Posts', () => {
  it('should be a function', () => {
    expect(typeof SignOut).toBe('function');
  });
});

describe('Like a post', () => {
  it('should be a function', () => {
    expect(typeof IsCurrentUser).toBe('function');
  });
});
