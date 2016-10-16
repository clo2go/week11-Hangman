var letter = require('./letter.js');
var Word = function(wrd) {
	this.word = wrd;
	this.lets = [];
	this.found = false;
	this.getLets = function(word) {
		for (var i = 0; i < this.word.length; i++) {
			this.lets.push(new letter.Letter(this.word[i]));
		}
	};
	this.didWeFindTheWord = function() {
		var count = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].appear) {
				count++;
			}
		}
		if (count === this.lets.length) {
			this.found = true;
		}
		return this.found;
	};
	this.checkIfLetterFound = function(guessLetter) {
		var whatToReturn = 0;
		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac === guessLetter) {
				this.lets[i].appear = true;
				whatToReturn++;
			}
		}
		return whatToReturn;
	};
	this.wordRender = function() {
		var str = "";
		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for (var i = 0; i < this.lets.length; i++) {
			str += this.lets[i].letterRender();
		}
		return str;
	};
};

exports.Word = Word;
