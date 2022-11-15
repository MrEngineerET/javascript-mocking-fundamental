const assert = require("assert");
const thumbWar = require("../thumb-war.js");
const utils = require("../utils");

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}

//monkey patching
spyOn(utils, "getWinner");
utils.getWinner.mockImplementation((p1, p2) => p1);

const playerOne = "Biruk Berhanu";
const playerTwo = "Abraham Adamu";

const winner = thumbWar(playerOne, playerTwo);
assert.strictEqual(winner, playerOne);
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Biruk Berhanu", "Abraham Adamu"],
  ["Biruk Berhanu", "Abraham Adamu"],
]);

//cleanup
utils.getWinner.mockRestore();

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}
