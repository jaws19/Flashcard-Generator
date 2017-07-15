var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;

	this.question = function() {
		console.log(this.front);
	};

	this.answer = function() {
		console.log(this.back);
	};
};

module.exports = BasicCard