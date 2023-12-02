/* eslint-disable import/extensions */
/* eslint-disable max-len */
import FavoriteRestoIdb from '../data/favorite-resto';
// eslint-disable-next-line import/no-unresolved
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._data = data;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._data;

    if (await this._isDataExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDataExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    if (this._likeButtonContainer) {
      this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

      const likeButton = document.querySelector('#likeButton');
      likeButton.addEventListener('click', async () => {
        await FavoriteRestoIdb.putResto(this._data);
        this._renderButton();
      });
    } else {
      console.error('likeButtonContainer is null');
    }
  },

  _renderLiked() {
    if (this._likeButtonContainer) {
      this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

      const likeButton = document.querySelector('#likeButton');
      likeButton.addEventListener('click', async () => {
        await FavoriteRestoIdb.deleteResto(this._data.id);
        this._renderButton();
      });
    } else {
      console.error('likeButtonContainer is null');
    }
  },
};

export default LikeButtonInitiator;
