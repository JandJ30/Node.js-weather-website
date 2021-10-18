const request = require("postman-request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a00169a44fccb29e7f2f6e3626a286a6&query=" +
    longitude +
    "," +
    latitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `It is ${body.current.weather_descriptions}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degrees. There is a ${body.current.precip}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
