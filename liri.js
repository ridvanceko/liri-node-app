require("dotenv").config();

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

  this.run = function() {
      if(this.newCommand === "concert-this"){
        console.log("This is concert-this command")
      }
      else if(this.newCommand === "spotify-this-song"){
        console.log("This spotify-this-song command")
      }
      else if(this.newCommand === "movie-this"){
        console.log("This is movie-this")
      }
      else if(this.newCommand === "do-what-it-say") {
        console.log("This is do-what-it-say")
      }
      
  }


}
