##Node Weather -- In progress

This is a command line application that retrieves weather forecast info whenever the user types in a United States Zipcode.

Technologies used:
- [Weather Underground API](http://www.wunderground.com)
- [Node JS](https://nodejs.org/)

Directions for use:

1. Download and unpack the zipfile

2. Register as a developer and generate an API key from [here](https://www.wunderground.com/weather/api). It should be a series of numbers and letters

3. Create a file titled 'apiKeyFile.js' in the root directory

4. Add the following code to the apiKeyFile.js file:

  `var apiKey = 'ADD YOUR API KEY HERE';
  module.exports.apiKeyObject = apiKey;`

5. Open the command line application (typically terminal on MacOSX) and navigate to the directory containing the unpacked zipfile you downloaded

6. Type the following command in the terminal, replacing `ZIPCODE` with the zipcode of the location you'd like the weather for:

`node app.js ZIPCODE`

Notes:
- You can also type in CITY, STATE in lieu of a zipcode. Example syntax is:
`Phoneix,AZ`

*Note the lack of a space between the city and state*
- The Weather Underground API only works consistently with US locations, sorry about that. I'm investigating the syntax needed for non US locations.
