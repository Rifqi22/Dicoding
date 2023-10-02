class ImageFigure extends HTMLElement {
  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.caption = this.getAttribute('caption') || null;
    this.render();
  }
 
  render() {
    this.innerHTML = `
      <figure>
        <img src="${this.src}" alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }
 
  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }
 
  static get observedAttributes() {
    return ['caption'];
  }
}
 
customElements.define('image-figure', ImageFigure);
// Creating element by Js
const imageFigureElement = document.createElement('image-figure');

imageFigureElement.setAttribute('src', 'https://i.imgur.com/iJq78XH.jpg');
imageFigureElement.setAttribute('alt', 'Dicoding');
imageFigureElement.setAttribute('caption', 'Logo Dicoding');

document.body.appendChild(imageFigureElement);