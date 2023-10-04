class WeatherItem extends HTMLElement {
    constructor(){
        super();
            this.shadowDOM = this.attachShadow({mode: 'open'})
        };

        set weather(weather){
            this._weather = weather;
            this.render();
        };

        render(){
            this.shadowDOM.innerHTML = `
                <style>
                    * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    }
    
                    :host {
                        display: block;
                        margin-bottom: 18px;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                        border-radius: 10px;
                        overflow: hidden;
                    }
    
                    .weather-pict{
                        width: 100%;
                        max-height: 300px;
                        object-fit: cover;
                        object-position: center;
                    }
    
                    .weather-info{
                        padding: 24px;
                    }
    
                    .weather-info > h2{
                        font-weight: lighter;
                    }
    
                    .weather-info > h3{
                        font-weight: lighter;
                    }
                    
                    .weather-info > p {
                        margin-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 10; /* number of lines to show */
                    }
                </style>
    
                <img class= "weather-pict" src="${this._weather.weather.icon}" alt="Weather Picture">
                <div class= "weather-info">
                    <h2>${this._weather.name}</h2>
                    <h3>${this._weather.weather.main}</h3>
                    <p>${this._weather.weather.description}</p>
                    <p>Temperature: ${this._weather.main.temp}</p>
                    <p>Pressure: ${this._weather.main.pressure}</p>
                    <p>Humidity: ${this._weather.main.humidity}</p>
                </div>
            `;
        }
    }
    
    customElements.define('weather-item', WeatherItem);
