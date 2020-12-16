export const publicacoes = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `

    <body>
    <section id='header-posts'>
        <a href="#" id="logo">
            <img src="../src/img/logo.png" alt="Logo do Site">
        </a>
        <a href="#" id="exit">
            <img src="../src/img/exit.png" alt="Logout">
        </a>
    </section>
    <main>
        <section id="user-container">
            <img src="../src/img/user.png" alt="Usuário" class="user-item">
            <h2 class="user-item" >Olá, User!</h2>
        </section>
        <section id="option-container">
            <h3 ><a href="#" class="option-item">Publicar</a></h3>
            <h3 ><a href="#" class="option-item">Publicações</a></h3>
        </section>
        <h4>Publicações</h4>
        <h5>Mais recentes</h5>
        <section id="post-container">
            <div class="post-item">
            <img src="../src/img/user.png">
            <p>Nome</p>
            </div>
        </section>
        <img src="../src/img/like.png" alt="like" id="like">
    </main>
    
</body>
    `;
    return rootElement;
  };
  