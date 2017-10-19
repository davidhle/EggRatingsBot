/*
David Le
LMC 2700
*/

// our Twitter library
var Twit = require('twit');
// include config file
var T = new Twit(require('./config.js'));

// set up a user stream
var stream = T.stream('user');

// define the ID of the user we are interested in @realDonaldTrump
var userID = 25073877;
//460554621
//25073877 my twitter user id for testing
// open a stream following events from that user ID
var stream = T.stream('statuses/filter', { follow: ( userID ) });
console.log("Stream for checking tweets from @realDonaldTrump is on!");

	stream.on('tweet', function (tweet) {
        var tweetStr = tweet.text;
		// Make sure that the tweet's from the right user
		if (tweet.user.id == userID) {
			console.log("This tweet was posted by Donald Trump: ");
            console.log(tweetStr);
		}
	});

function tweeted(err, data, response) {
    if (err){
        console.log("Error! Something went wrong!");
    } else{
        console.log("Tweet successfully posted");
    }
}
