const input =
  `4
  aba
  baba
  aba
  xzxb
  3
  aba
  xzxb
  ab`;

const output = `2
1
0
`;

const processQueries = (input) => {
  let result = [];
  const strings = {};

  const args = input.split('\n');
  const stringsSize = parseInt(args.shift());

  let i = 0;
  while(i<stringsSize) {
    let value = args[0].trim();
    if (!strings[value]) strings[value] = 0;
    strings[value]++;
    args.shift();
    i++;
  }
  console.log(strings);
  const queriesSize = parseInt(args.shift());
  i=0;
  while(i<queriesSize) {
    let value = args[0].trim();
    if (strings[value]) {
      result.push(strings[value]);
    } else result.push(0);
    args.shift();
    i++;
  }

  return result.join('\n');
};

describe('it should find the strings in the second parameter in the first', () => {
  test('should find the ocurrences', () => {
    expect(processQueries(input)).toEqual(output);
  });
});