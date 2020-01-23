const bassfilter = require("./soundwave");

test("returns an array and upper and lower limit", () => {
  expect(bassfilter([10, 5], 10, 5)).toEqual([10, 5]);
});
xtest("returns an array with the upper limit set", () => {
  expect(bassfilter([11, 5], 10, 5)).toEqual([10, 5]);
});
