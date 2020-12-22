export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>LOGIN</h1>

      <form>
        <fieldset>
        <label for="email"></label>
        <input type="email" id="email" name="email" placeholder="Email" autocomplete="on" required><br><br>

        <label for="senha"></label>
        <input type="password" id="password" name="password" placeholder="Senha" autocomplete="off" inputmode="numeric" minlength="4" title="Digite uma senha de no mínimo 4 dígitos!" required><br><br>
        <input type="submit" value="Sign in">
        </fieldset>
      </form>
  `;
  return rootElement;
};
