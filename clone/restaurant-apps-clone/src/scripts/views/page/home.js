import CONFIG from '../../globals/config';
import RestoSource from '../../data/resto-source';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const Home = {
  async render() {
    return `
            <h1 id="page-title">Loading data.....</h1>
            <div class="cards_item" id="item"></div>
    `;
  },

  async afterRender() {
    const resto = await RestoSource.topResto();
    let listData = '';
    resto.restaurants.forEach((data) => {
      listData += `
              <div class="card">
                <a id="detail" href='/#/detail/${data.id}' role="button" tabindex="0"> <h2 class="card_title" aria-label="${data.name}, lihat lebih lanjut?">
                  <span class="card_rate">⭐️${data.rating}</span>
                  ${data.name}
                </h2></a>
        
                <img class="lazyload" loading="lazy" data-src="${CONFIG.BASE_IMAGE_URL}${data.pictureId}" 
                  alt="${data.name}"
                  href='/#/detail/${data.id}'>

                <br>
                <p class="card_desc">${data.description}....</p>
              </div>
            `;
    });
    document.querySelector('#page-title').innerHTML = 'List Restoran Populer';
    document.querySelector('#item').innerHTML = listData;
  },
};

export default Home;
