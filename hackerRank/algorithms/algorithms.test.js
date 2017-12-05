const arraySum = require('./arraySum');
const calculatePoints = require('./compareTheTriplets');
const calculateDiagonals = require('./diagonalDifference');
const plusMinus = require('./plusMinus');
const createStair = require('./staircase');
const minMaxSum = require('./minMaxSum');
const tallestCandle = require('./tallestCandles');
const readFile = require('../utils/readFile');

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

describe('Min max is  sum the 4 lowest numbers and the 4 highest numbers', () => {
  test('The array [1, 2, 3, 4, 5] should return 10', () => {
    expect(minMaxSum([1, 2, 3, 5, 4])).toEqual(`10 14`);
  });
  test('The array [12, 3, 7, 9, 150] should return 10', () => {
    expect(minMaxSum([12, 3, 7, 9, 150])).toEqual(`31 178`);
  });
});

describe('Get the quantity of the highest number in an array', () => {
  test('how many of the highest numbers in an array repeats', () => {
    expect(tallestCandle(4, [3, 2, 3, 1])).toEqual(2);
  });
  test('4 equals candles', () => {
    expect(tallestCandle(4, [3, 3, 3, 3])).toEqual(4);
  });
  test('zero candles', () => {
    expect(tallestCandle(0, [])).toEqual(0);
  });
  test('only one candle', () => {
    expect(tallestCandle(1, [0])).toEqual(1);
  });
  test('three numbers 8', () => {
    expect(tallestCandle(7, [2, 3, 5, 1, 3, 6, 1, 3, 6, 8, 2, 3, 6, 3, 2, 7, 8, 3, 6, 2, 8])).toEqual(3);
  });
  test('Testing max array size', (done) => {
    readFile('../hackerRank/algorithms/fixtures/input06.txt')
      .then((data) => {
        const [N, values] = data.split('\n');
        expect(tallestCandle(N, values.split(' '))).toEqual(parseInt(N));
        done();
      });
  });
  test('Testing big array size and numbers', (done) => {
    readFile('../hackerRank/algorithms/fixtures/input05.txt')
      .then((data) => {
        const [N, values] = data.split('\n');
        expect(tallestCandle(N, values.split(' '))).toEqual(12443);
        done();
      });
  });
});

describe('Grading Students', () => {
  const gradingStudents = require('./gradingStudents');
  test('Sample test case from hackerrank', () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
  });
  test('if it converts multiples correctly', () => {
    expect(gradingStudents([47, 48, 46, 49])).toEqual([47, 50, 46, 50]);
  });
});