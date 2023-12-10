import favoriteRestaurant from '../src/scripts/data/favorite-restaurants-idb';
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurant.getAllRestaurant()).forEach(async (restaurant) => {
      await favoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(favoriteRestaurant);
});
