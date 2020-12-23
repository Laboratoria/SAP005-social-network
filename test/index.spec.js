import * as services from '../src/services/index.js';
import { Login } from '../src/pages/login/index.js';
import { renderPage } from '../src/router.js';
// import { Home } from '../src/pages/home/index.js';

services.Google = jest.fn(() => Promise.resolve(true));
services.Facebook = jest.fn(() => Promise.resolve(true));

describe('Render página de login', () => {
  it('carrega a página', () => {
    expect(Login()).toMatchSnapshot();
  });

  it('click no botão de login com o Google', () => {
    const pagLogin = Login();
    pagLogin.querySelector('#btnGoogle').dispatchEvent(new Event('click'));
    expect(services.Google).toHaveBeenCalled();
  });

  it('click no botão de login com o Facebook', () => {
    const pagLogin = Login();
    pagLogin.querySelector('#btnFacebook').dispatchEvent(new Event('click'));
    expect(services.Facebook).toHaveBeenCalled();
  });
});

describe('Testar renderPage', () => {
  it('é uma função', () => {
    expect(typeof renderPage).toBe('function');
  });
});

// describe('Render página home', () => {
//   it('carrega a página', () => {
//     expect(Home()).toMatchSnapshot();
//   });
// });
