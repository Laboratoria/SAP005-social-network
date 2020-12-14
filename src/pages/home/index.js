export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <header>
        <h1>Olá, Nome</h1>
      </header>
      <main class="main-home">
        <section class="post-enviar">
          <textarea class="post" placeholder="Conte sobre sua última cerveja..."></textarea>
          <button>Postar</button>
        </section>
        <section class="posts-enviados">
        </section>
      </main>
  `;
  return rootElement;
};
