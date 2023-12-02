import CONFIG from '../../globals/config';

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant?" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant?" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestoItemTemplate = (data) => `
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
export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestoItemTemplate,
};
