/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */

import { itActsAsFavoriteRestoIdbModel } from './contract/favoriteContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      this.return;
    }
    return favoriteResto.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // memastikan id ini belum ada dalam array
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    favoriteResto = favoriteResto.filter((resto) => resto.id != id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteResto = [];
  });

  itActsAsFavoriteRestoIdbModel(FavoriteRestoArray);
});
