const createStair = require('./index');

test('a stair of 2 steps', () => {
  expect(createStair(2)).toEqual(' #\n##');
});

test('a stair of 5 steps', () => {
  expect(createStair(5)).toEqual('    #\n   ##\n  ###\n ####\n#####');
});