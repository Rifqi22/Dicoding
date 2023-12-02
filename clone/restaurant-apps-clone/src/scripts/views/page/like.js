/* eslint-disable indent */
import FavoriteRestoIdb from '../../data/favorite-resto';
import CONFIG from '../../globals/config';

const Favorite = {
    async render() {
        return `
                <h1 id='page-title'>Loading......</h1>
                <div class='like-page' id='item'></div>
                <h2 class='resto-item_not-found'></h2>
        `;
    },

    async afterRender() {
        const resto = await FavoriteRestoIdb.getAllResto();
        let dataList = '';
        if (resto.length === 0) {
            document.querySelector('#page-title').innerHTML = 'Sepertinya anda belum pernah melakukan like';
            document.querySelector('.resto-item_not-found').innerHTML = '-';
        } else {
            resto.forEach((data) => {
                dataList += `
                    <div class="card">
                        <h2 class="card_title"aria-label="${data.name}, lihat lebih lanjut?">
                            <span class="card_rate">⭐️${data.rating}</span>
                            <a href='/#/detail/${data.id}' tabindex="0">
                            ${data.name}</a>
                        </h2>
                        <img src="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" 
                            alt="${data.name}"
                            href='/#/detail/${data.id}'>
                        <br>
                        <p class="card_desc">${data.description}....</p>
                    </div>
                `;
            });
            document.querySelector('#page-title').innerHTML = 'Restoran Favorit';
            document.querySelector('.like-page').innerHTML = dataList;
        }
    },
};

export default Favorite;
