var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

game = {
	wordBank : ["washington", "adams", "jefferson", "madison", "monroe", "jackson", "vanburen", "harrison", "tyler", "polk", "taylor", "fillmore", "pierce", "buchanan", "lincoln", "johnson", "grant", "hayes", "garfield", "arthur", "cleveland", "harrison", "cleveland", "mcKinley", "roosevelt", "taft", "wilson", "harding", "coolidge", "hoover", "roosevelt", "truman", "eisenhower", "kennedy", "johnson", "nixon", "ford", "carter", "reagan", "bush", "clinton", "obama", "trump"],
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();

		//get a random word from the array
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

		this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters
		console.log("Welcome to US ex-Presidents Hangman!\nGuess from all the ex presidents' last names.");
 +		console.log(this.currentWrd.wordRender() + '\n');
 +		console.log(game.wordBank);
		
		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    
		    console.log('  The letter or space you guessed is: ' + result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    //if the user guessed incorrectly minus the number of guesses they have left
		    if (findHowManyOfUserGuess == 0){
		    	console.log('Even Trump can guess better than that. Try another letter.');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('You\'re wrong #alternativeFacts.  True Fact = Good Job keep going!');

		    	//check if you win only when you are right
	    		if(self.currentWrd.didWeFindTheWord()){
			    	console.log('You Won! The president was ' + self.currentWrd.word);
 +					console.log('You are great at making this game great again and again!!!!!');
			    	return; //end game
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());
		    console.log('here are the letters you guessed already: ');

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('You lost! The president was', self.currentWrd.word);
 +			    console.log('Why do you hate America? :( You should have memorized all of your presidents like that weird kid in 3rd grade!');
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}


};

game.startGame();