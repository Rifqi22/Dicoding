/* eslint-disable no-undef */
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto';
import * as Testfactories from './helpers/testFactories';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButton"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant?"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant?"]')).toBeFalsy();
  });

  it('should be able to like the restauraunt', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({ id: 1 });

    // simulasi menekan tombol
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Menunggu beberapa saat sebelum memeriksa data
    // eslint-disable-next-line arrow-parens
    await new Promise(resolve => { setTimeout(resolve, 3000); });

    const data = await FavoriteRestoIdb.getResto(1);
    expect(data).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });

    // simulasi menekan tombol
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada data ganda
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.deleteResto(1);
  });

  // xit untuk menonaktifkan test case
  it('should not add a restaurant when it has no id', async () => {
    await Testfactories.createLikeButtonPresenterRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
