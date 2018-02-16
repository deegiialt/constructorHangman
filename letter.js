var words = "spongebob, patrick, mr.krabs, sandy";

var userGuess = process.argv[2];


var Letter = function (characters) {
	this.characters = characters;//holds characters for the letter
	this.guessed = false;
	this.lettersGuessed = function () {
		if(this.guessed === true) {
			return this.characters;
		} else {
			return ("_");
		}
	}
	this.checksGuess = function(c) {
		if(userGuess === c) {
			this.guessed = true;
			console.log("true");
		} else {
			console.log("false");
		}
	}
}

var b = new Letter("b");

module.exports = Letter;