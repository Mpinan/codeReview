const bassfilter = require("./soundwave");

test("returns an array and its upper limit", () => {
  expect(bassfilter([10], 10, 5)).toEqual([10]);
});
test("returns an array and its lower limit", () => {
  expect(bassfilter([5], 10, 5)).toEqual([5]);
});
test("returns an array with the upper limit set", () => {
  expect(bassfilter([10, 5], 10, 5)).toEqual([10, 5]);
});
test("returns an array with the upper limit changed", () => {
  expect(bassfilter([11, 5], 10, 5)).toEqual([10, 5]);
});
test("returns an array with the lower limit changed", () => {
  expect(bassfilter([10, 4], 10, 5)).toEqual([10, 5]);
});
test("returns an filtered array", () => {
  expect(bassfilter([10, 4, 7, 8, 3, 15, 7], 10, 5)).toEqual([
    10,
    5,
    7,
    8,
    5,
    10,
    7
  ]);
});
