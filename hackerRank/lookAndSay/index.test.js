const lookAndSay = require('./index');

test('should return 13112221 if the input is 1211 after process 3 times', () => {
  expect(lookAndSay('3 1 2 1 1')).toEqual(["1", "3", "1", "1", "2", "2", "2", "1"]);
});