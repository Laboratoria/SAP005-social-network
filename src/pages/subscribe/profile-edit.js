export const ProfileEdit = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <header>
    <div id="profile">
        <figure class='figure-profile'>
            <img class="picture-profile" src="/src/pages/subscribe/img-profile/background-profile/profile-exemple.jpg" alt=""> 
        </figure>
        <p id="name-profile">Keiti Peurri</p>
        <button id="change-color"> Mudar capa</button>
        <div id="data-user">
             <p class="interest data-user">Cantora Iniciante Web</p>
             <p class="local data-user">United States</p>
             <p class="birthday data-user">20/20/1989</p>              
        </div>
        <label for="">Resumo</label>
        <input class="resume" type="text" placeholder="Conte-nos mais sobre você">
    </div>
</header>

    `;
    return rootElement;
  };