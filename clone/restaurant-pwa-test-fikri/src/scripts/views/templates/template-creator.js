import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="post">
  <img tabindex="0" class="post-img"
      crossorigin="anonymous"
      src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}"
      alt="Gambar Restoran ${restaurant.name}">
  <div class="post-content">
    <h1 tabindex="0" class="post-content-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
    <h2 tabindex="0" class="post-content-city">${restaurant.city}</h2>
    <h2 tabindex="0" class="post-content-rating">Rating: ${restaurant.rating}</h2>
    <p tabindex="0" class="post-content-desc">${restaurant.description}</p>
  </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurants) => `
  <h2 class="movie__title">${restaurants.name}</h2>
  <img class="movie__poster" crossorigin="anonymous" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurants.address}</p>
    <h4>City</h4>
    <p>${restaurants.city}</p>
    <h4>Rating</h4>
    <p>$⭐️ {restaurants.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurants.description}</p>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
