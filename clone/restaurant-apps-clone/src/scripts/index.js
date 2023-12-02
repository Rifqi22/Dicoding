/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import './components/hero-image';
import './components/drawer';
import '../styles/main.css';

import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Runtime = import('regenerator-runtime');
const Lazysizes = import('lazysizes');

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});

const skipToContent = document.querySelector('.skip');
const mainContent = document.querySelector('#content');

skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    mainContent.focus();
  }
});

skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.focus();
  skipToContent.blur();
});
