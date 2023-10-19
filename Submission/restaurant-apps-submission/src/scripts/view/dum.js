const main = () => {
    fetch('../data/DATA.json')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Error fetching JSON', error))
  }

  const main = () => {
    // const searchElement = document.querySelector('search-bar');
    const restaurantListElement = document.querySelector('#restaurant-list');
  
    class DataSource {
      static async searchRestaurant(){
        try {
          const response = await fetch('../data/DATA.json');
          const responseJson = await response.json();
            if(responseJson.restaurants){
              return Promise.resolve(responseJson.restaurants);
          } else {
              return Promise.reject(`restaurants is not found`);
          }
          } catch (error) {
              return Promise.reject(error);
          }
  }
  }
  
  
  const renderRestaurant = async () => {
    try {
      const result = await DataSource.searchRestaurant();
      console.log("The Result:", result);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  
  const renderResult = results => {
    restaurantListElement.innerHTML = '';
    results.forEach(restaurant => {
      const restaurantElement = document.createElement('div');
      restaurantElement.innerHTML = ` 
      <img class="fan-art-club" src="${restaurant.pictureId}" alt="Fan Art">
      <div class="club-info">
      <h2> Restaurant </h2>
        <h2>${restaurant.name}</h2>
        <p>${restaurant.description}</p>
        <p>${restaurant.city}</p>
        <p>${restaurant.rating}</p>
      </div>
    `;
      restaurantListElement.appendChild(restaurantElement);
    
    })
  
  };
  
  const fallbackResult = message => {
    // restaurantListElement.renderError(message);
    restaurantListElement.innerHTML = 
    `
    <style>
    restaurant-list > .placeholder {
      font-weight: lighter;
      color: rgba(0,0,0,0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  </style>
    `;
    restaurantListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };
  
  const renderError = message => {
    restaurantListElement.innerHTML = 
    `
    <style>
    restaurant-list > .placeholder {
      font-weight: lighter;
      color: rgba(0,0,0,0.5);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  </style>
    `;
    restaurantListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
  
  // Executing Function
  
  // console.log(DataSource.searchRestaurant());
  // const hasil = DataSource.searchRestaurant();
  // console.log(hasil);
  console.log(renderRestaurant());
  };
  
  export default main;