class DataSource{
    static searchWeather(city){
        const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
        const apiKey = `0d541c0955eaa3912220c9e95fb46b80`;
        return fetch (`${apiUrl}${city}&appid=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.weathers){
                    return Promise.resolve(responseJson.weathers);
                  }else{
                    return Promise.reject(`${city} is not found`);
                  }
            });
    }
}

export default DataSource;