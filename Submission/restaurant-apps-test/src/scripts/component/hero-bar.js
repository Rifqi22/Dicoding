class HeroBar extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'})
    };

    connectedCallback(){
        this.render();
    };

    render(){
        this.shadowDOM.innerHTML =`
        <style>

            :host{
                display: block;
                width: 100%;
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h1 {
                padding: 16px
                font-size: 36px;
                text-align: left;
                margin-left: 20px
            }

            .hero {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 50vh;
                width: 100%;
                text-align: center;
                background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)), url('./images/heros/hero-image_4.jpg');
                background-color: #c7c7c7;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
              }


            @media  (max-width: 550px) {
                h1 {
                    font-size: 20px;
                }
            }
        </style>

        <!-- HTML  -->
        <div class="hero">
        <div class="hero__inner">
          <h2 class="hero__title" tabindex="0">Let's Explore </h2>
          <p class="hero__tagline" tabindex="0">The test of delicious dishes around here.</p>
        </div>
      </div>

        `;

    }


};

customElements.define('hero-bar', HeroBar);