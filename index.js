var inquirer = require("inquirer");
var Word = require("./word.js");

var userGuess = process.argv[2];
var guessesLeft = 10;

var words = new Word("spirited away, howls moving castle, princess mononoke");
inquirer.prompt([
	{
		type: "input",
		message: "? Guess a letter!",
		name: "userGuess"
	}
])
.then(function(answers) {
	if(answers.userGuess === //array of letters of word to guess
		) {
		console.log("CORRECT!!!");
		//push correct letter guessed to fill blank
	} else {
		console.log("INCORRECT!!!");
		guessesLeft--;
		console.log(`${guessesLeft} guesses remaining!!!`)
	}

  if(guessesLeft === 0) {
      console.log("Out of guesses. Game over.");
  }
)
