//Problem: we need a way to get weather forecast info based off of a location
//Solution: Use nodejs to connect to the Weather Underground API to retrieve and print out weather forecast information

var http = require('http');
var apiKeyObject = require('./apiKeyFile'); //Placing api key in a gitignore file

var apiKeyValue = apiKeyObject[Object.keys(apiKeyObject)[0]];
var location = '15068';

//Print out message
function printForecast(weather, temperature, city){
  var message = 'The weather is currently ' + weather + ' with a temperatue of ' + temperature + ' degrees fahrenheit in '+ city +'.';
  console.log(message);
}

//Print out error message
function printError(error){
  console.error(error.message);
}

//Connect to the API
var getForecast = function(location){

  //Concatenate the HTTP request URL
  var requestURL = 'http://api.wunderground.com/api/'+apiKeyValue+'/conditions/q/'+location+'.json';

  var request = http.get(requestURL, function(response){
    var body = '';

    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end', function(){
      if(response.statusCode === 200){
        try {
          //Parse the data
          var weatherReport = JSON.parse(body);
          //Print the data out
          printForecast(weatherReport.current_observation.weather.toLowerCase(), weatherReport.current_observation.temp_f, weatherReport.current_observation.display_location.full);
        } catch(error){
          //Parse error
          console.log('error detected');
          printError(error);
        }
      }
      else {
        printError({message: "There was an error getting the forecast for " + location + ". (" + response.statusCode  +")"});
      }
    });
  });
  request.on('error', printError);
};

getForecast(location);
