// importamos la funcion que vamos a testear
import { Feed } from './index';

describe('Feed', () => {
  it('should be a function', () => {
    expect(typeof Feed).toBe('function');
  });
});
