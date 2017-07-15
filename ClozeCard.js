function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;

	if (!this.text.includes(this.cloze)) {
		console.log("Error: " + this.cloze + " is not part of " + this.text);
	}
}

ClozeCard.prototype.displayText = function() {
	console.log(this.text);
}

ClozeCard.prototype.displayCloze = function() {
	console.log(this.cloze);
}

ClozeCard.prototype.displayPartial = function() {
	var str = this.text.replace(this.cloze, "...");
	console.log(str);
};

module.exports = ClozeCard;