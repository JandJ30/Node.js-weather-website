const geocode = require("./utils/geocode");
const forecast = require("./utils/weatherStack");
const address = process.argv[2];

if (!address) {
  console.log(`Please provide an address`);
} else {
  geocode(address, (error, { longitude, latitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}

//Weatherstack API
// const url =
//   "http://api.weatherstack.com/current?access_key=a00169a44fccb29e7f2f6e3626a286a6&query=37.8267,-122.4233&units=m";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service");
//   } else if (response.body.error) {
//     console.log(`Unable to find location`);
//   } else {
//     console.log(
//       `It is ${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degrees. There is a ${response.body.current.precip}% chance of rain.`
//     );
//   }
// console.log(
//   `It is ${response.body.current.weather_descriptions}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degrees. There is a ${response.body.current.precip}% chance of rain`
// );
// });
//Geocoding API
// const urlLt =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamVyZW1pZS1hZ3JhdmFudGUiLCJhIjoiY2t0eTgxd2s2MzE0cjJwbzM1d2RlbmM4dyJ9.AxO2ssShk33jWrer6UR3Kw&limit=1";

// request({ url: urlLt, json: true }, (error, response) => {
//   if (error) {
//     console.log(`Unable to connect to geocode service`);
//   } else if (response.body.features.length === 0) {
//     console.log(`Unable to find location. Please try another search term.`);
//   } else {
//     console.log(
//       response.body.features[0].center[1],
//       response.body.features[0].center[0]
//     );
//   }
// });
