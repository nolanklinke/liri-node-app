require("dotenv").config();

var fs = require('fs');


var keys = require("./keys.js")
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var input = process.argv[2];
var nodeArgs = process.argv;
var search = "";

if (input == "my-tweets") {

    console.log("this is where tweets will go");

    /*client.get('statuses/lookup', function(error, tweets, response) {
        if(error) throw error;
        console.log(tweets);  // The favorites.
        console.log(response);  // Raw response object.
      });*/
    

} else if (input == "spotify-this-song") {

    for (var i = 3; i < nodeArgs.length; i++) {
        search += nodeArgs[i] + " ";
    };
        
    console.log("Searching for " + search);
    

    spotify
    .search({ type: 'track', query: search, limit: 1 })
    .then(function(response) {
        var data = response;
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(function(err) {
      console.log(err);
    });
           
          


} else if (input == "movie-this") {

    for (var i = 3; i < nodeArgs.length; i++) {
        search += nodeArgs[i] + " ";

    };

    console.log(search);

} else if (input == "do-what-it-says") {

    console.log("do what it says");

};
