export const publicar = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
        <h1>Vou publicar aqui!</h1>
    `;
    return rootElement;
  };