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

    client.get('/statuses/user_timeline.json', {limit: 20}, function(error, tweets, response) {
        if(error) throw error;

        for (var i = 0; i < tweets.length; i++) {

            console.log("\nTweet: " + tweets[i].text); 
            console.log("Created at: " + tweets[i].created_at);
        }
        
      });
    

} else if (input == "spotify-this-song") {

    for (var i = 3; i < nodeArgs.length; i++) {
        search += nodeArgs[i] + " ";
    };
        
    console.log("Searching for " + search);

if (search) {

    
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if ( err ) {
            console.log('Error occurred: ' + err);
            return;  
        }
        else if (search) {
        var songInfo = data.tracks.items[0];
        console.log("\nArtist(s): " + songInfo.artists[0].name);
        console.log("\nSong Name: " + songInfo.name);
        console.log("\nPreview Link: " + songInfo.preview_url);
        console.log("\nAlbum Name: " + songInfo.album.name);
        };

    });

} else { 
    console.log("NO");

} 
  

} else if (input == "movie-this") {

    for (var i = 3; i < nodeArgs.length; i++) {
        search += nodeArgs[i] + " ";

    };

    console.log(search);

} else if (input == "do-what-it-says") {

    console.log("do what it says");

};
