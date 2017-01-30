var Letter = function(let) {
	
	this.charac = let;
	
	this.appear = false;

	this.letterRender = function() {
		//if appear is false then show the _
		//else appear is true then show character
		return !(this.appear) ? " _ " : this.charac;
	};
};

module.exports = Letter;