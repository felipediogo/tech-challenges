/* 
  https://www.hackerrank.com/challenges/2d-array/problem
  difficulty: easy
*/
const input = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

const inputNegative = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

const lastErrorInput = [
  [-1, 1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0],
  [-1, -1, -1, 0, 0, 0],
  [0, -9, 2, -4, -4, 0],
  [-7, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
];

const lastErrorOutput = 0;
const output = 13;
const outputNegative = -6;

const getBiggestHourglassSum = (hourglasses) => {
  let biggestSum;
  let hourglassSum = 0;
  for (var i = 0; i < 4; i++) {
    for (var x = 0; x < 4; x++) {
      hourglassSum = hourglasses[x][i] + hourglasses[x][i + 1] + hourglasses[x][i + 2];
      hourglassSum += hourglasses[x + 1][i + 1];
      hourglassSum += hourglasses[x + 2][i] + hourglasses[x + 2][i + 1] + hourglasses[x + 2][i + 2];
      if (biggestSum === undefined || hourglassSum > biggestSum) biggestSum = hourglassSum;
      hourglassSum = 0;
    }
  }
  return biggestSum;
};

describe('It should return the sum of the biggest hourglass', () => {
  test('with the input it should return the expected output', () => {
    expect(getBiggestHourglassSum(input)).toBe(output);
  });

  test('with the input it should return the expected output', () => {
    expect(getBiggestHourglassSum(lastErrorInput)).toBe(lastErrorOutput);
  });

  test('with the input it should return the expected output', () => {
    expect(getBiggestHourglassSum(inputNegative)).toBe(outputNegative);
  });
});