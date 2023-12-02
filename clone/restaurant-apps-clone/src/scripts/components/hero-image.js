/* eslint-disable require-jsdoc */
class HeroPage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    
    <picture>
      <source media="(max-width:599px)" srcset="./images/heros/hero-image_4-small.jpg" type="image/jpeg" alt="Foto makanan estetis">
      <source media="(min-width:600px)" srcset="./images/heros/hero-image_4-large.jpg" type="image/jpeg" alt="Foto makanan estetis">
      <img src="../../public/images/heros/hero-image_4.jpg" alt="Foto makanan estetis">
    </picture>


      <div class="hero_inner">
        <p class="hero_tag" >Experience various menu 
            on many restaurant in Indonesia</p>
      </div>

    </div>
    `;
  }
}

customElements.define('hero-image', HeroPage);
