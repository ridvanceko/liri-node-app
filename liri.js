require("dotenv").config();
const axios = require("axios");
const moment = require("moment");

let keys = require("./key");
let spotify = new Spotify(keys.Spotify);
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
          // handle success

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

this.run = function() {
  if (this.newSong === "spotify-this-song") {
    console.log("This is spotify-this-song song")

    let URL = "https://www.npmjs.com/package/node-spotify-api" + this.newOption + "/events?app_id=codingbootcamp"


      // Make a request for a user with a given ID
      axios.get(URL)
        .then(function (response){
          console.log('      Artist: ' + track['0'].artists['0'].name);
          console.log('The song\'s Name: ' + track['0'].name);
          console.log('   Spotify Link: ' + track['0'].preview_url);
          console.log('          Album: ' + track['0'].album.name + '\n');
        }
        
        .catch(function (error) {
          // handle error
          console.log(error);
        })

  }



   



    
   


    else if (this.newCommand === "spotify-this-song") {
      console.log("This spotify-this-song command")
    }
    else if (this.newCommand === "movie-this") {
      console.log("This is movie-this")
    }
    else if (this.newCommand === "do-what-it-say") {
      console.log("This is do-what-it-say")
    }


  }


}




