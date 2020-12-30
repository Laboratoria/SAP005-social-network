import { onNavigate } from "../../utils/history.js";

export const loginFeed = function feedIn(){
    document.getElementById('login-button')

    .addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/feed')
    document.getElementById('header-document').style.display = "none"
    document.getElementById('root').style.width = "100%"
    
    }); 
}