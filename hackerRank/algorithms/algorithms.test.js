const arraySum = require('./arraySum');
const calculatePoints = require('./compareTheTriplets');
const calculateDiagonals = require('./diagonalDifference');
const plusMinus = require('./plusMinus');
const createStair = require('./staircase');

describe('Simple Array Sum', () => {
  test('Test if an array [1,2,3,4,5] returns the sum of all numbers', () => {
    expect(arraySum([1, 2, 3, 4, 5])).toEqual(15);
    expect(arraySum([-1, -2, 5, 20, 5])).toEqual(27);
  });
});

describe('Compare the Triplets', () => {
  test('Test the calculation of points for two students based in an array of grades', () => {
    expect(calculatePoints([7, 6, 9, 7], [6, 7, 8, 7])).toEqual('2 1');
  });
});

describe('Diagonal Difference', () => {
  test('Test the calculation of two diagonals of an array', () => {
    expect(calculateDiagonals([[7, 6, 9, -7], [6, 7, -8, 7], [6, 7, 2, 7], [6, 7, 3, 7]], 4)).toEqual(25);
  });
});

describe('Plus Minus', () => {
  test('Test the calculation of the percentage representations of negative, positives and zero in an array', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1], 6)).toEqual('0.500000\n0.333333\n0.166667');
  });
});

describe('Staircase', () => {
  test('a stair of 2 steps', () => {
    expect(createStair(2)).toEqual(' #\n##');
  });
  test('a stair of 5 steps', () => {
    expect(createStair(5)).toEqual('    #\n   ##\n  ###\n ####\n#####');
  });
});