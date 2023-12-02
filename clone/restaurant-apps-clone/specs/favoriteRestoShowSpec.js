/* eslint-disable no-new */
/* eslint-disable no-undef */
import FavoriteRestoShowPresenter from '../src/scripts/views/page/liked-resto/favorite-resto-show-presenter';
import FavoriteRestoView from '../src/scripts/views/page/liked-resto/favorite-resto-view';

describe('Showing all favorite restaurant', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurant have been liked', () => {
    it('should render the information that no restaurant have been liked', async () => {
      // eslint-disable-next-line no-shadow
      const view = {
        showFavoriteResto: jest.fn(),
      };

      const favoriteResto = {
        getAllResto: /** jest.fn().mockImplementation( */() => [] /** ) */,
      };

      const presenter = new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      // const resto = [];
      // presenter._displayResto(resto);
      await presenter._showFavoriteResto();

      expect(view.showFavoriteResto).toHaveBeenCalledWith([]);
      expect(document.querySelectorAll('.resto-item_not-found').length).toEqual(1);
    });

    it('should ask for the favorite restaurant', () => {
      const favoriteResto = {
        getAllResto: jest.fn().mockImplementation(() => []),
      };

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite restaurant exist', () => {
    // it('should show the restaurant', (done) => {
    it('should show the restaurant', async () => {
      // document.getElementById('item').addEventListener('#item:updated', () => {
      //   expect(document.querySelectorAll('#item').length).toEqual(2);

      //   done();
      // });

      const favoriteResto = {
        getAllResto: jest.fn().mockImplementation(() => [
          {
            id: 1,
            title: 'resto a',
            vote_average: 3,
            overview: 'resto a',
          },
          {
            id: 3,
            title: 'resto abc',
            vote_average: 4,
            overview: 'Sebuah restoran bernama B',
          },
          {
            id: 4,
            title: 'ini mah resto abcd',
            vote_average: 4,
            overview: 'Sebuah restoran bernama abcd',
          },
        ]),
      };

      await new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      // Tambahkan delay untuk memastikan bahwa elemen telah diperbarui
      await new Promise((resolve) => { setTimeout(resolve, 1000); });

      // Periksa jumlah elemen yang diharapkan
      expect(document.querySelectorAll('.card').length).toEqual(3); // Sesuaikan dengan jumlah yang diharapkan
    });
  });
});
