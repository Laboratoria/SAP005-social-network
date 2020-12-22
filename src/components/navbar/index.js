export const Navbar = () => {
  const navbar = document.createElement('nav');
  navbar.setAttribute('id', 'bottom-nav');

  navbar.innerHTML = `
    <i id="icon-nav-feed" class="icon-nav fas fa-home"></i>
    <i class="icon-nav fas fa-plus-circle"></i>
    <i id="icon-nav-profile" class="icon-nav fas fa-user-circle"></i>
  `;
  return navbar;
};
