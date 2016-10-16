var Letter = function(char) {
	this.charac = char.toLowerCase();
	this.appear = false;
	this.letterRender = function() {
		if (this.appear) {
			return this.charac;
		} else if (this.charac === " ") {
				this.appear = true;
				return this.charac;
		} else {
				return "_ ";
		}
	};
};

exports.Letter = Letter;

// /**
//  * Letter constructor, stores the character provided and
//  * sets its initial visibility to false unless it is a space
//  */
// function Letter(value) {
// 	// Store the character value in the Letter object
// 	this.value = value;
// 	// If the letter is a space, visible defaults to true
// 	// Otherwise visible defaults to false
// 	this.visible = (value === ' ');
// }

// /**
//  * Returns the stored character if it is visible, or _ if not
//  */
// Letter.prototype.render = function() {
// 	// Below is an example of a ternary operator, read this as:
// 	// "if this.visible is true return this.value otherwise return _"
// 	return (this.visible) ? this.value : '_';
// }

// module.exports = Letter;