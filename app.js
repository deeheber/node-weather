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

  var request = http.get('http://api.wunderground.com/api/'+apiKey+'/conditions/q/'+zipCode+'.json', function(response){
    //console.log(response.statusCode);
    var body = '';

    response.on('data', function(chunk){
      body += chunk;
    });

    response.on('end', function(){
      if(response.statusCode === 200){
        console.log('success');
        try {
          //Parse the data
          var profile = JSON.parse(body);
          //Print the data out
          //console.log(response);
          //printForecast(weather, temperature);
        } catch(error){
          //Parse error
          printError(error);
        }
      }
      else {
        printError({message: "There was an error getting the forecast for " + zipCode + ". (" + response.statusCode  +")"});
      }
    });
  });
  request.on('error', printError);
};

getForecast(zipCode);
