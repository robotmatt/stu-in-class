var TV = require("./tv");
var inquirer = require("inquirer")

// Create a new TV object
var tv = new TV();

inquirer.prompt([{
  type: "list",
  message: "Would you like to search for an actor or a show?",
  choices: ["actor", "show"],
  name: "searchChoice"
}]).then(function(choices){
  var term = choices.searchChoice
  if (choices.searchChoice === "actor") {
    inquirer.prompt([{
      name: "actors",
      message: "Input the name of the actor you would like to search for"
    }]).then(function(actorChoice){
      var search = actorChoice.actors
      tv.findActor(search)
    })
  } else if (choices.searchChoice === "show") {
    inquirer.prompt([{
      name: "shows",
      message: "What show would you like to look up?"
    }]).then(function(showChoice){
      var search = showChoice.shows;
      tv.findShow(search)
    })
  }
})