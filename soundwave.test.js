const soundwave = require("./soundwave");

test("returns an array and upper and lower limit", () => {
  expect(soundwave([10, 5], 10, 5)).toEqual([10, 5]);
});
