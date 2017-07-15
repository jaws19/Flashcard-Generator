var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var cardType = process.argv[2];
var cardSide = process.argv[3];

var basicCard1 = new BasicCard("Who is the Dallas Maverick's all-time leading scorer?", "Dirk Nowitzki");
var clozeCard1 = new ClozeCard("Dirk Nowitzki is the Dallas Maverick's all-time leading scorer.", "Dirk Nowitzki");
