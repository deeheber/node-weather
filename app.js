const http = require('http');
const apiKeyObject = require('./apiKeyFile'); //Placing api key in a gitignore file
const apiKeyValue = apiKeyObject[Object.keys(apiKeyObject)[0]];
const location = process.argv.slice(2);

function printForecast(weather, temperature, city){
  const message = `The weather is currently ${weather} with a temperatue of ${temperature} degrees fahrenheit in ${city}.`;
  console.log(message);
}

function printError(error){
  console.error(error.message);
}

const getForecast = location=>{
  const requestURL = `http://api.wunderground.com/api/${apiKeyValue}/conditions/q/${location}.json`;

  const request = http.get(requestURL, response=>{
    let body = '';

    response.on('data', chunk=>{
      body += chunk;
    });

    response.on('end', ()=>{
      if(response.statusCode === 200){
        try {
          const weatherReport = JSON.parse(body);
          printForecast(weatherReport.current_observation.weather.toLowerCase(), weatherReport.current_observation.temp_f, weatherReport.current_observation.display_location.full);
      } catch(error){
          console.log('Error detected!');
          printError(error);
        }
      }
      else {
        printError({message: `There was an error getting the forecast for ${location} ${response.statusCode}`});
      }
    });
  });
  request.on('error', printError);
};

location.forEach(getForecast);