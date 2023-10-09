import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/weather-list.js';
import '../component/image.js';
import '../component/clock.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const weatherListElement = document.querySelector('weather-list');

    const onButtonSearchClicked = async () => {
        DataSource.checkWeather(searchElement.value).then(renderResult).catch(fallbackResult)
    };

    const renderResult = results => {
        weatherListElement.weathers = results;
        weatherListElement.changeIcon();
    };

    const fallbackResult = message => {
        weatherListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;