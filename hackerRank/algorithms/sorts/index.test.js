const monitorScript = require('../../utils/monitorScript');
const { buildArray, createArray } = require('./createArray');
const quickSort = require('./quickSort');
const x = (test) => (teste2) => console.log(`${test},${teste2}`);
const printMemoryUsage = (script) => {
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script [${script}] uses approximately ${Math.round(used * 100) / 100} MB`);
}
describe('checks array building memory usage', () => {
    test('that an array of 500000 length will be created', () => {
        // buildArray(500000, 1);
        // QUICKSORT
        // var quickSortStart = new Date();
        // console.log(createArray(10));
        // x('asd')('bsd');
        monitorScript(() => quickSort({ arr: createArray(10000), left: 0, right: 9999 }))();
        // console.log("Call to doSomething took " + (new Date() - start) + " milliseconds.")
        expect(true).toEqual(true);

    });
});