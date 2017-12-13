const input = Array.apply(null, {length: N}).map(Number.call, Number);
const output = [5, 1, 2, 3, 4];

const shiftItems = (items, times) => {
  const length = items.length;
  if (times > length) times = times % length;
  for (var i=0; i< times; i++) {
    let item = items.shift();
    items.splice(items.length, 0, item);
  }
  return items;
};

const leftRotation = (a, d) => a.slice().splice(d, a.length).concat(a.slice().splice(0, d));

let start;
const startScript = () => start = new Date();
const finishScript = () => console.warn("Last script took " + (new Date() - start) + " milliseconds.");
const printMemory = (script) =>
console.warn(`The script [${script}] uses approximately ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB`);

const felipe = () => {
  startScript();
  shiftItems(input, 10000000000);
  finishScript();
  printMemory();
};

const hyan = () => {
  startScript();
  leftRotation(input, 10000000000);
  finishScript();
  printMemory();
};

// describe('It should shift all items of an array to the left', () => {
//   test('it should shift 4 times', () => {
//     expect(shiftItems(input, 50000)).toEqual(output);
//   });

//   test('it should shift 8 times', () => {
//     expect(leftRotation(input, 50000)).toEqual(output);
//   });
// });

var N = 100000; 




// hyan();
// felipe();