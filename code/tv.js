var axios = require("axios");
var fs = require("fs");

// Create the TV constructor
var TV = function () {

    // findShow function takes in a tv show and searches the tvmaze API
    this.findShow = function (show) {
        var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

        axios.get(URL).then(function (response) {
            console.log(response);
        });
    };


    this.findActor = function (actor) {
        var URL = "http://api.tvmaze.com/search/people?q=" + actor;

        axios.get(URL).then(function (response) {
            console.log(response);
        });
    };
}

module.exports = TV;