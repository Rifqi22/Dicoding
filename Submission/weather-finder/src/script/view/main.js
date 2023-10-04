import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/weather-list.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const weatherListElement = document.querySelector('weather-list');

  const onButtonSearchClicked = async () => {
    DataSource.searchWeather(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult)
  };

  const renderResult = results => {
    weatherListElement.weathers = results;
  };

  const fallbackResult = message => {
    weatherListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

};

export default main;