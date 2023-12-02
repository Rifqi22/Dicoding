/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
import { createRestoItemTemplate } from '../../templates/template';

class FavoriteRestoView {
  getTemplate() {
    return `
    <h1 id='page-title'>Loading......</h1>
    <div class='like-page' id='item'></div>
    <h2 class='resto-item_not-found'></h2>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteResto(resto) {
    let html;
    if (resto.length) {
      // eslint-disable-next-line no-shadow
      html = resto.reduce((carry, resto) => carry.concat(createRestoItemTemplate(resto)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('item').innerHTML = html;

    document.getElementById('item').dispatchEvent(new Event('item:updated'));
  }

  _getEmptyRestoTemplate() {
    return `
      <div class="resto-item_not-found">
        <h2 class= "page-title">-</h2>
      </div>
    `;
  }
}

export default FavoriteRestoView;
