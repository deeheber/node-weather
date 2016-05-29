//Problem: we need a way to get weather forecast info based off of a zipcode
//Solution: Use nodejs to connect to the Weather Underground API to retrieve and print out weather forecast information

var location = 97209;

//Print out message
function printForecast(weather, temperature){
  var message = 'The weather is currently ' + weather + ' with a temperatue of ' + temperature + '.';
}

//Print out error message
function printError(error){
  console.error(error.message);
}

//Connect to the API
var getForecast = function(location){
  //Read the data
  //Parse the data
  //Print the data out

  //Error handling
};

getForecast(location);
