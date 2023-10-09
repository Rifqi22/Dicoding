class DataSource{
    static checkWeather(city){
        const apiKey  = "0d541c0955eaa3912220c9e95fb46b80" // add your api key
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

        return fetch (apiUrl + city + `&appid=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson){
                    return Promise.resolve(responseJson);
                  }else{
                    return Promise.reject(`${city} is not found`);
                  }
            });
    }
}

export default DataSource;