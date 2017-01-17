##Node Weather

[Notes](#Notes)

This is a command line application that retrieves weather forecast info whenever the user types in a United States Zipcode.

![nodeweather](https://cloud.githubusercontent.com/assets/12616554/15868407/8f4ec38a-2c9c-11e6-8a2a-cea5d1471f33.gif)

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

#Notes:
- You can also type in CITY,STATE instead of a zipcode. Capitalization doesn't matter. Example syntax is:

  `Phoneix,AZ`

  **Note the lack of a space between the city and state**
- This app accepts multiple arguments so something like this would work:

  `node app.js 12345 97209 Pittsburgh,PA Orlando,FL`

- The Weather Underground API only works consistently with US locations, sorry about that. See [here](https://www.wunderground.com/about/faq/international_cities.asp) for a list of supported non-US locations. For the most part, I've found that the following will work:

  `node app.js CITY,COUNTRY`

  Example:

  `node app.js Paris,France`
