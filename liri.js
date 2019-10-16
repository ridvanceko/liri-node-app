require("dotenv").config();
const axios = require("axios");
const moment = require("moment");

let keys = require("./key.js");
let spotify = new Spotify(keys.Spotify);
let omdb = new OMDB(keys);
let command = new Command(process.argv[2], process.argv[3]);

command.run();

function Spotify(keys) {
  this.newId = keys.id;
  this.newSecret = keys.secret;
};


function Command(command, option) {
  this.newCommand = command;
  this.newOption = option;
  

  this.run = function () {
    if (this.newCommand === "concert-this") {
      console.log("This is concert-this command")

      let URL = "https://rest.bandsintown.com/artists/" + this.newOption + "/events?app_id=codingbootcamp"


      // Make a request for a user with a given ID
      axios.get(URL)
        .then(function (response) {
          

          response.data.forEach((info) => {
            console.log("Name: " + info.venue.name);
            console.log("Country: " + info.venue.country);
            console.log("City: " + info.venue.city + " " + info.venue.region);
            console.log("Date: "+info.datetime);
            console.log(" ")
          })

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
 else if (this.newCommand === "spotify-this-song") {
      console.log("This spotify-this-song command");
    }
    else if (this.newCommand === "movie-this") {
      console.log("This is movie-this");

      
      let URL = "http://www.omdbapi.com/?t="+option.split("-")[0]+"&y="+option.split("-")[1]+"&apikey=" + omdb.getKey();
      axios.get(URL)
          .then(function (response) {
              // handle success
              let info = response.data;
                  this._string = "Name: "+info.Title+"\n" +
                      "Year: "+info.Year+"\n" +
                      "Rated: "+info.Rated+"\n" +
                      "Released: "+info.Released+"\n" +
                      "Runtimr: "+info.Runtime+"\n" +
                      "Genre: "+info.Genre+"\n" +
                      "Director: "+info.Director+"\n" +
                      "Actors: "+info.Director+"\n" +
                      "Languages: "+info.Language+"\n";
              console.log(this._string);
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          });

  }else if(this._command === "do-what-it-says"){
      console.log(this._printCommand);
  }
};

}

function Spotify(keys) {
this._ID = keys.id;
this._secret = keys.secret;

this.getId = () => {
  return this._ID;
};

this.getSecret = () => {
  return this._secret;
}
}

function OMDB(keys) {
this._key = keys.OMDB.key;

this.getKey = () =>{
  return this._key
}
}

