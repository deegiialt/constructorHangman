var Letter = require("./letter.js");

var Word = function (words) {
	this.words = words;//takes in words from index.js
	var wordArr = words.split(", ");//splits words and puts into array
	var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];//chooses random word
	var characters = randomWord.split("").join(" ");// array of letters
	//pushes characters into Letter constructor
	var newChar = new Letter(characters);
//loop through characters array and display _ same as length
	// var matchedLetters = [];
	var answerArray = [];
	this.found = false;
	this.guessesTogether = function() {
		for(var i = 0; i < characters.length; i++) {
			this.answerArray.push(newChar);
			// newChar.lettersGuessed();
			// answerArray[i] = " _ ";
		}
		// console.log(answerArray.join(" "))
	}
	this.find = function() {

	}
	this.callingGuess = function(char) {
		newChar.checksGuess()
	}
}


//to test
// var hello = new Word("hello, there");


//would be in index passed through word.
// var words = "spirited away, howls moving castle, princess mononoke";
