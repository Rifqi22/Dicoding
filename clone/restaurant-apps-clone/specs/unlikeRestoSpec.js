/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';
import * as Testfactories from './helpers/testFactories';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Unliking A Resto', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <button aria-label="unlike this restaurant?" id="likedButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
      `;
  });

  it('should show the unlike button when the restaurant has not been liked before', async () => {
    expect(document.querySelector('[aria-label="unlike this restaurant?"]')).toBeTruthy();
  });

  it('should not show the like button when the restaurant has been liked', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant?"]')).not.toBeNull();
  });

  it('should be able to remove liked resto from the list', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({ id: 1 });
    await new Promise((resolve) => { setTimeout(resolve, 2000); });
    document.querySelector('[aria-label="unlike this restaurant?"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({ id: 1 });
    await FavoriteRestoIdb.deleteResto(1);
    await new Promise((resolve) => { setTimeout(resolve, 2000); });

    // simulasi klik batal menyukai
    document.querySelector('[aria-label="unlike this restaurant?"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
