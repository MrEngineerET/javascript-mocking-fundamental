const thumbWars = require("../thumb-war");
const utils = require("../utils");

test("return winner", () => {
  const playerOne = "Biruk Berhanu";
  const playerTwo = "Abraham Adamu";

  jest.spyOn(utils, "getWinner");
  utils.getWinner.mockImplementation((p1, p2) => p1);

  const winner = thumbWars(playerOne, playerTwo);
  expect(winner).toBe(playerOne);

  utils.getWinner.mockRestore();
});
