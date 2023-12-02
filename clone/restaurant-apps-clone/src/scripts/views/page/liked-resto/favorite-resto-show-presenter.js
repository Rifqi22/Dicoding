class FavoriteRestoShowPresenter {
  constructor({ view, favoriteResto }) {
    this._view = view;
    this._favoriteResto = favoriteResto;

    this._displayResto();
  }

  async _showFavoriteResto() {
    const resto = await this._favoriteResto.getAllResto();
    this._displayResto(resto);
  }

  async _displayResto() {
    const resto = await this._favoriteResto.getAllResto();
    this._view.showFavoriteResto(resto);
  }
}

export default FavoriteRestoShowPresenter;
