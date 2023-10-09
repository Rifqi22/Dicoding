import cloudIcon from "../../../dist/images/Clouds.png";
import clearIcon from "../../../dist/images/clear.png";
import drizzleIcon from "../../../dist/images/drizzle.png";
import mistIcon from "../../../dist/images/mist.png";
import rainIcon from "../../../dist/images/rain.png";
import snowIcon from "../../../dist/images/snow.png";
import humidIcon from "../../../dist/images/humidity.png";
import windIcon from "../../../dist/images/wind.png";


class WeatherList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set weathers(weathers) {
        this._weathers = weathers;
        this.render();
    };

    // Fungsi Untuk Mengubah Icon sesuai property 'main' pada object yang dikembalikan API
    changeIcon() {
        const weatherIcon = this.shadowDOM.querySelector('.weather-icon');
        // change weather icon
        if (this._weathers.weather[0].main == "Clouds") {
            weatherIcon.src = `${cloudIcon}`;
        } else if (this._weathers.weather[0].main == "Rain") {
            weatherIcon.src = `${rainIcon}`;
        } else if (this._weathers.weather[0].main == "Drizzle") {
            weatherIcon.src = `${drizzleIcon}`;
        } else if (this._weathers.weather[0].main == "Mist") {
            weatherIcon.src = `${mistIcon}`;
        } else if (this._weathers.weather[0].main == "Clear") {
            weatherIcon.src = `${clearIcon}`;
        } else if (this._weathers.weather[0].main == "Snow") {
            weatherIcon.src = `${snowIcon}`;
        }

    }

    render() {
        this.shadowDOM.innerHTML = `
    
    <style>
    .card {
        background: linear-gradient(135deg, #00feba, #5b548a);
        color: #fff;
        border-radius: 20px;
        padding: 40px 20px;
        text-align: center;
        margin-top: 2em;
      } 
      
      .weather {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      
      .weather-icon {
        width: 20em;
        margin-top: 30px;
      }
      
      h1 {
        font-size: 80px;
        font-weight: 500;
      }
      
      h2 {
        font-size: 45px;
        font-weight: 400;
      }
      
      .details {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 1em;
        margin-top: 2em;
      }
      
      .col {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
        margin: 0 4em;
      }
      
      .col > img {
        width: 4em;
        margin-right: 2em;
      }
      
      .humidity,
      .wind {
        font-size: 2em;
      }

      .humidity-label,
      .wind-label {
        font-size: 1em
      }

      .col > div {
        line-height: 0.5em;
      }

      @media  (max-width: 1080px) {
        .col {
            margin: 0 3em;
        }
    }

      @media  (max-width: 720px) {
        h1 {
            font-size: 50px;
        }
        h2 {
            font-size: 30px;
        }
        .weather-icon {
            width: 10em;
        }
        .col {
            margin: 0 2em;
        }
        .col > img {
            width: 2.5em;
            margin-right: 1em;
          }
          .humidity,
          .wind {
            font-size: 1.5em;
          }
    
          .humidity-label,
          .wind-label {
            font-size: 1em
          }
    }

    @media  (max-width: 550px) {
        .details {
            flex-direction: column;
        }
        .col {
            margin-bottom: 1em;
        }
        .col > img {
            width: 2.5em;
            margin-right: 2em;
          } 
    }
      
    </style>


    <div class="card">
        <div class="weather">
            <div class="main">
                <img src="" alt="" class="weather-icon">
                <h2 class="main_weather"> ${this._weathers.weather[0].main}</h2>
                <h1 class="temp">${Math.round(this._weathers.main.temp)} °C </h1>
                <h2 class="city">${this._weathers.name}</h2>
            </div>

            <div class="details">
                <div class="col">
                    <img src="${humidIcon}" alt="humidity">
                    <div>
                        <p class="humidity">${this._weathers.main.humidity} %</p>
                        <p class="humidity-label">Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="${windIcon}" alt="wind">
                    <div>
                        <p class="wind"> ${ this._weathers.wind.speed} Km/h </p>
                        <p class="wind-label">Wind</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    };


    renderError(message) {
        this.shadowDOM.innerHTML = `
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
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

}

customElements.define('weather-list', WeatherList);
