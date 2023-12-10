import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  menuHamburger: document.querySelector('#hamburger'),
  navList: document.querySelector('.nav-list'),
  mainElement: document.querySelector('.nav-list'),
  content: document.querySelector('#restaurant-content'),
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#maincontent');

// tutorial dari reviewer
skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
