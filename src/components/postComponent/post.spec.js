import {
  addLikeListener, showPosts, updatelikePost,
} from './post.js';
// import * as services from '../../services/index.js';

// services.handleSignOut = jest.fn(() => Promise.resolve(true));

describe('Like Function', () => {
  it('should be a function', () => {
    expect(typeof addLikeListener).toBe('function');
  });
});

describe('Show Posts', () => {
  it('should be a function', () => {
    expect(typeof showPosts).toBe('function');
  });
});

describe('Update Posts', () => {
  it('should be a function', () => {
    expect(typeof updatelikePost).toBe('function');
  });
});
