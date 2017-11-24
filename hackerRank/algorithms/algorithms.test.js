const arraySum = require('./arraySum');
const calculatePoints = require('./compareTheTriplets');
const calculateDiagonals = require('./diagonalDifference');

test('Test if an array [1,2,3,4,5] returns the sum of all numbers', () => {
  expect(arraySum([1,2,3,4,5])).toEqual(15);
  expect(arraySum([-1,-2,5,20,5])).toEqual(27);
});

test('Test the calculation of points for two students based in an array of grades', () => {
  expect(calculatePoints([7,6,9,7], [6,7,8,7])).toEqual('2 1');
});

test('Test the calculation of two diagonals of an array', () => {
  expect(calculateDiagonals([[7,6,9,-7], [6,7,-8,7], [6,7,2,7], [6,7,3,7]], 4)).toEqual(25);
});

// [7,6,9,-7]
// [6,7,-8,7]
// [6,7,2,7]
// [6,7,3,7]
// 23
// -2