const assert = require("assert");
const thumbWar = require("../thumb-war.js");
const utils = require("../utils");

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  return mockFn;
}

//monkey patching
const originalGetWinner = utils.getWinner;

utils.getWinner = fn((p1, p2) => p1);

const playerOne = "Biruk Berhanu";
const playerTwo = "Abraham Adamu";

const winner = thumbWar(playerOne, playerTwo);
assert.strictEqual(winner, playerOne);
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Biruk Berhanu", "Abraham Adamu"],
  ["Biruk Berhanu", "Abraham Adamu"],
]);

//cleanup
utils.getWinner = originalGetWinner;
