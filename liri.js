require("dotenv").config();

var keys = require("./key");

var spotify = new Spotify(keys.spotify);