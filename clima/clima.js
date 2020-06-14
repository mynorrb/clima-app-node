const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=196c1727d5e457be8cf1d1f7533ce2b0&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}