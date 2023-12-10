const Home = {
  async render() {
    return `
        <div class="content-post" id="restaurant-content"></div>
    `;
  },

  async afterRender() {
    fetch('https://restaurant-api.dicoding.dev/list')
      .then((response) => response.json())
      .then((data) => {
        const restaurantContent = document.getElementById('restaurant-content');
        let restaurants = '';
        data.restaurants.forEach((restaurant) => {
          restaurants += `
        <article class="post">
          <img tabindex="0" class="post-img lazyload"
               crossorigin="anonymous"
               src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}"
               alt="Gambar Restoran ${restaurant.name}">
          <div class="post-content">
          <h1 tabindex="0" class="post-content-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <h2 tabindex="0" class="post-content-city">${restaurant.city}</h2>
            <h2 tabindex="0" class="post-content-rating">Rating: ⭐️${restaurant.rating}</h2>
            <p tabindex="0" class="post-content-desc">${restaurant.description}</p>
          </div>
        </article>`;
        });

        restaurantContent.innerHTML = restaurants;
      })
      .catch((error) => console.error(error));
  },
};

export default Home;
