/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.add('open');
    event.stopPropagation();
    drawer.style.width = '50%';
  },
  _closeDrawer(event, drawer) {
    drawer.classList.remove('open');
    event.stopPropagation();
    drawer.style.width = '0';
  },
};

export default DrawerInitiator;
