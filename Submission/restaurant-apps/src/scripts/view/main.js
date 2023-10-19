import DataSource from '../data/data-source.js';
import '../component/restaurant-list.js';

const main = () => {
  // const searchElement = document.querySelector('search-bar');
  const restaurantListElement = document.querySelector('restaurant-list');
  restaurantListElement.restaurants;


const renderRestaurant = async () => {
  try {
    const result = await DataSource.searchRestaurant();
    renderResult(result);
  } catch (message) {
    fallbackResult(message);
  }
};

const renderResult = results => {
  restaurantListElement.restaurants = results;
};

const fallbackResult = message => {
  restaurantListElement.renderError(message);
};

renderRestaurant();

};

export default main;
