/* eslint-disable max-len */
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
            <h1 id="title-page">Loading data....</h1>
            <div id='likeButtonContainer'></div>
            <div class='detail-page' id='item'></div>
            
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let detailData = '';
    let categoryMenu = '';
    let foodMenu = '';
    let drinkMenu = '';
    let reviewList = '';
    const data = await RestoSource.detailResto(url.id);

    // eslint-disable-next-line no-shadow
    data.restaurant.categories.forEach((data) => {
      categoryMenu += `${data.name} `;
    });

    // eslint-disable-next-line no-shadow
    data.restaurant.menus.foods.forEach((data) => {
      foodMenu += `<li>${data.name}</li>`;
    });

    // eslint-disable-next-line no-shadow
    data.restaurant.menus.drinks.forEach((data) => {
      drinkMenu += `<li>${data.name}</li>`;
    });

    if (Array.isArray(data.restaurant.customerReviews)) {
      data.restaurant.customerReviews.forEach((review) => {
        reviewList += `
              <div class='review'>
                  <p class="review_name">${review.name}<span style="font-size: 10px;">[${review.date}]</span></p>
                  <p>"${review.review}"</p>
              </div>
              `;
      });
    } else {
      reviewList += '<p>No reviews available</p>';
    }

    detailData += `
              <div class="detail_post">
                  
                  <div class="main_data">
                    <h2>${data.restaurant.name} | ${data.restaurant.rating}⭐️</h2>
                    <h3> ⟟ ${data.restaurant.address}, ${data.restaurant.city}</h3>
                    <img src="${CONFIG.BASE_IMAGE_URL + data.restaurant.pictureId}" alt="${data.restaurant.name}" title="${data.restaurant.name}">
                    <p>${data.restaurant.description}</p>
                  </div>

                  <div class="support_data">
                    
                    <h2>Menu</h2>
                      <div class="category">Kategori: ${categoryMenu}</div>
                      <div class="menu">                    
                        <div><h3>Makanan</h3>
                        ${foodMenu}</div>
                        <div><h3>Minuman</h3>
                        ${drinkMenu}</div>
                      </div>
                    </div>

                  </div>
              </div>

                  <h2>Review</h2>
                    <p>Bagaimana pendapat mereka?</p>
                    <div class="review_list">${reviewList}</div> `;

    document.querySelector('#title-page').innerHTML = 'Detail Restoran';
    document.querySelector('.detail-page').innerHTML = detailData;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        rating: data.restaurant.rating,
        pictureId: data.restaurant.pictureId,
        city: data.restaurant.city,
        address: data.restaurant.address,
      },
    });
  },
};

export default Detail;
