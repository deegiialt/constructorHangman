var inquirer = require("inquirer");

var guessesLeft = 10;

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
})