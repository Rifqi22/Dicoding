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

export default DataSource;
