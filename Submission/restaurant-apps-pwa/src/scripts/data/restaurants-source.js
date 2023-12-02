import API_ENDPOINT from '../globals/api-endpoint';
import '../component/restaurant-list';

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.GET_RESTAURANTS);
    const responseJson = await response.json();
    console.log('Result of Fetch: ', responseJson.restaurants);
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    console.log('Result of Fetch: Detail Restaurant ', response);
    return response.json();
  }
}

export default RestaurantSource;
