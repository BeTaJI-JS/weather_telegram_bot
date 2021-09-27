const fetch = require("node-fetch");
const  getWeather = async (city) => {
   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_TOKEN}&units=metric`)
   const data = await res.json()
return `${data.main.temp} degrees`
}

module.exports = {
    getWeather
}