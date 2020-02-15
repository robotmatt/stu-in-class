var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var TV = function () {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function (shows) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + shows;

    axios.get(URL).then(function (response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data;

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n\n");
    //   console.log(jsonData)

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function (err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  this.findActor = function (actors) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actors;
    axios.get(URL).then(function (response) {
      // Place the response.data into a variable, jsonData.
      var jsonData = response.data[0].person;
      // showData ends up being the string containing the show data we will print to the console
      var actorData = [
        "Name: " + jsonData.name,
        "Birthday: " + jsonData.birthday,
        "Gender: " + jsonData.gender,
        "Country: " + jsonData.country.name,
        "URL: " + jsonData.url
      ].join("\n\n");
      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", actorData + divider, function (err) {
        if (err) throw err;
        console.log(actorData);
      });
    });
  };
  // Add code to search the TVMaze API for the given actor
  // The API will return an array containing multiple actors, just grab the first result
  // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
  // Print this information to the console
};

module.exports = TV;
