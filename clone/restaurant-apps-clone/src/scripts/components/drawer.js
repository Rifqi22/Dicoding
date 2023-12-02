/* eslint-disable require-jsdoc */
class DrawerNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="drawer" class="nav">
      <div class="nav_list">
        <a class="nav_item" href="/">Home</a>
        <a class="nav_item" href="#/like">Favorite</a>
        <a class="nav_item" href="https://github.com/Ezan220401">About Us</a>
      </div>
    </nav>  
      `;
  }
}
customElements.define('drawer-nav', DrawerNav);
