import API_ENDPOINT from '../globals/api-endpoint';
import '../component/restaurant-list.js';

class RestaurantSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.GET_RESTAURANTS);
    const responseJson = await response.json();
    console.log("Result of Fetch: ", responseJson.restaurants);
    return responseJson.restaurants;
  }

  // static async upcomingMovies() {
  //   const response = await fetch(API_ENDPOINT.UPCOMING);
  //   const responseJson = await response.json();
  //   return responseJson.results;
  // }

  // static async detailMovie(id) {
  //   const response = await fetch(API_ENDPOINT.DETAIL(id));
  //   return response.json();
  // }
}

export default RestaurantSource
;
