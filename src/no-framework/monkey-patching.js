const assert = require("assert");
const thumbWar = require("../thumb-war.js");
const utils = require("../utils");

//monkey patching
const originalGetWinner = utils.getWinner;

utils.getWinner = (p1, p2) => p1;

const playerOne = "Biruk Berhanu";
const playerTwo = "Abraham Adamu";

const winner = thumbWar(playerOne, playerTwo);
assert.strictEqual(winner, playerOne);

//cleanup
utils.getWinner = originalGetWinner;
