import { Post } from './index.js';

describe('Post', () => {
  it('should be a function', () => {
    expect(typeof Post).toBe('function');
  });
  it('shoul return PostPage', () => {
    expect(Post()).toMatchSnapshot();
  });
});
