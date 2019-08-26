/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  var pronoun = ["He", "It", "You"];
  var adj = ["My", "Big", "His"];
  var noun = ["Car.com", "Hat.com", "Bottle.com"];
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        document.querySelector("#text").innerHTML +=
          "<li>" + pronoun[i] + adj[j] + noun[k] + "</li>";
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
