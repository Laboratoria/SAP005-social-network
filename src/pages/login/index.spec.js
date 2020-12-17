import { Login } from './index.js';

function register () {
   
    var auth = null;
    firebase.auth().createUserWithEmmailPassword( document.getElementById("e-mail").value, document.getElementById("password").value)
    .then(function(user){
        alert("Cadastrado com sucesso");
         auth = user;
    })  .catch(function (error){
        alert("Falha ao Cadastar");  
    });
} 


// describe('Login', () => {
//   it('should be a function', () => {
//     expect(typeof Login).toBe('function');
//   });
// });
