require("dotenv").config();

var keys = require("./keys.js")

//var spotify = new Spotify(keys.spotify);

//var client = new Twitter(keys.twitter);

var input = process.argv[2];
var nodeArgs = process.argv;
var search = "";

if (input == "my-tweets") {

    console.log("this is where tweets will go");

} else if (input == "spotify-this-song" || input == "movie-this") {

    for (var i = 3; i < nodeArgs.length; i++) {
        search += nodeArgs[i] + " ";
    };

    console.log(search);

} else if (input == "do-what-it-says") {

    console.log("do what it says");

};
