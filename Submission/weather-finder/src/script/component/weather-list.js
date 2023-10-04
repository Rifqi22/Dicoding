import './weather-item.js';

class WeatherList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'})
    };

    set weathers(weathers){
        this._weathers = weathers;
        render();
    }

    render(){
        this.shadowDOM.innerHTML = ``;
        this._weathers.forEach(weather => {
            const weatherItemElement = document.createElement('weather-item');
            weatherItemElement.weather = weather;
            this.shadowDOM.appendChild(weatherItemElement);
        });
    };

    renderError(message){
        this.shadowDOM.innerHTML=
        `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
        this.shadowDOM.innerHTML+= `<h2 class="placeholder">${message}</h2>`;
    };
}

customElements.define('weather-list', WeatherList);