import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import './component/hero-bar.js';
import './component/app-bar.js';
import main from './view/main.js';

document.addEventListener('DOMContentLoaded', main);