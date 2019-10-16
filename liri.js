require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
let Spotify = require("node-spotify-api");
let fs = require("fs");

let keys = require("./key.js");
let omdb = new OMDB(keys);
let command = new Command(process.argv[2], process.argv[3]);
let spotify = new Spotify({
    id: keys.Spotify.id,
    secret: keys.Spotify.secret
});
command.run();

// function Spotify(keys) {
//     this.newId = keys.id;
//     this.newSecret = keys.secret;
// };




function Command(command, option) {
    this.newCommand = command;
    this.newOption = option;


    this.run = function () {
        if (this.newCommand === "concert-this") {
            console.log("This is concert-this command")

            let URL = "https://rest.bandsintown.com/artists/" + this.newOption + "/events?app_id=codingbootcamp"

            console.log(URL)
            // Make a request for a user with a given ID
            axios.get(URL)
                .then(function (response) {

                    response.data.forEach((info) => {
                        console.log("Name: " + info.venue.name);
                        console.log("Country: " + info.venue.country);
                        console.log("City: " + info.venue.city + " " + info.venue.region);
                        console.log("Date: " + info.datetime);
                        console.log(" ")
                    })

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }


        // * Artist(s)

        //      * The song's name

        //      * A preview link of the song from Spotify

        //      * The album that the song is from



        else if (this.newCommand === "spotify-this-song") {
            console.log("This spotify-this-song command \n");

            

            spotify.search({ type: 'track', query: this.newOption }, function (err,responsea) {
                
                if (err) {
                    return console.log('Error occurred: ' + err );
                }
                
                this.string = "Album: "+response.tracks.items[1].album.name+"\n" + 
                "Artist(s): "+response.tracks.items[1].album.artists[0].name+"\n"+
                "Release Date: "+response.tracks.items[1].album.release_date+"\n"+
                "External URL: "+response.tracks.items[1].external_urls.spotify+"\n";
                console.log(this.string);


                 });

        }
        else if (this.newCommand === "movie-this") {
            console.log("This is movie-this");


            let URL = "http://www.omdbapi.com/?t=" + option.split("-")[0] + "&y=" + option.split("-")[1] + "&apikey=" + omdb.getKey();
            axios.get(URL)
                .then(function (response) {
                    // handle success
                    let info = response.data;
                    this._string = "Name: " + info.Title + "\n" +
                        "Year: " + info.Year + "\n" +
                        "Rated: " + info.Rated + "\n" +
                        "Released: " + info.Released + "\n" +
                        "Runtimr: " + info.Runtime + "\n" +
                        "Genre: " + info.Genre + "\n" +
                        "Director: " + info.Director + "\n" +
                        "Actors: " + info.Director + "\n" +
                        "Languages: " + info.Language + "\n";
                    console.log(this._string);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });

        } else if (this.newCommand === "do-what-it-says") {
            console.log("This is do what it says command");
            fs.readFile("random.txt", "utf8", function(err, data){
                if(err) {
                    return console.log(err);
                }
                console.log(data);
            });


        }
    };

}

function OMDB(keys) {
    this._key = keys.OMDB.key;

    this.getKey = () => {
        return this._key
    }
}

