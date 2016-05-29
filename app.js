//Problem: we need a way to get weather forecast info based off of a zipcode
//Solution: Use nodejs to connect to the Weather Underground API to retrieve and print out weather forecast information

var http = require('http');
var apiKey = require('./apiKeyFile'); //Placing api key in a gitignore file

var zipCode = '97209';

//Print out message
function printForecast(weather, temperature){
  var message = 'The weather is currently ' + weather + ' with a temperatue of ' + temperature + '.';
}

//Print out error message
function printError(error){
  console.error(error.message);
}

//Connect to the API
var getForecast = function(zipCode){
  //Read the data
  var request = http.get('http://api.wunderground.com/api/'+apiKey+'/conditions/q/'+zipCode+'.json', function(response){
    console.log(response.statusCode);
    
  });
  //Parse the data
  //Print the data out

  //Error handling
};

getForecast(zipCode);
