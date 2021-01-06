// importamos la funcion que vamos a testear
// eslint-disable-next-line import/named
import { myFunction } from './index';

describe('myFunction', () => {
  it('should be a function', () => {
    expect(typeof myFunction).toBe('function');
  });
});
