const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

// jest.mock("../utils", () => {
//   return {
//     getWinner: jest.fn((p1, p2) => p1),
//   };
// });

test("return winner", () => {
  //   const playerOne = "Biruk Berhanu";
  //   const playerTwo = "Abraham Adamu";
  //   const winner = thumbWar(playerOne, playerTwo);
  //   expect(winner).toBe(playerOne);
  //   expect(utils.getWinner.mock.calls).toEqual([
  //     ["Biruk Berhanu", "Abraham Adamu"],
  //     ["Biruk Berhanu", "Abraham Adamu"],
  //   ]);
  //   expect(utils.getWinner).toHaveBeenCalledTimes(2);
  //   expect(utils.getWinner).toHaveBeenCalledWith(playerOne, playerTwo);
  //   //cleanup
  //   utils.getWinner.mockReset();
});
