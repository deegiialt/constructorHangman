var Letter = require("./letter.js");

var Word = function (words) {
	this.words = words;//takes in words from index.js
	var wordArr = words.split(", ");//splits words and puts into array
	var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];//chooses random word
	var characters = randomWord.split("");
	characters = new Letter(characters);
	this.word = function() {
		Letter.lettersGuessed();
	}
}

//to run
// characters.Letter();

//would be in index passed through word.
// var words = "spirited away, howls moving castle, princess mononoke";

// console.log(randomWord);


// console.log(letters);