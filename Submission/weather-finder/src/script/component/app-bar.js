class AppBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    };
    connectedCallback(){
        this.render();
    };

    // Render Method
    render(){
        this.shadowDOM.innerHTML =
        `
        <style>
        * {
        padding: 20px;
        margin: 0;
        box-sizing: border-box;
        }
        :root {
            --primary-color: #272829;
            --secondary-color:  #fff;
            --tertiary-color: #42f5c2;
          }
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
            margin-bottom: 20px;
        }
    </style>

        <h1>Welcome to Weather App</h1>
        `
    };
}

customElements.define('app-bar', AppBar);
