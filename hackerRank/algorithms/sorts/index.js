const { pipe, tap } = require('ramda');
const { sort: quickSort } = require('./quickSort');
const { sort: heapSorting } = require('./heapSort');

const printMemory = (script) =>
    console.warn(`The script [${script}] uses approximately ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB`);
let start;
const startScript = () => start = new Date();
const finishScript = () => console.warn("Last script took " + (new Date() - start) + " milliseconds.");

const performanceNormalSort = (arr) =>
    pipe(
        tap(startScript),
        (arr) => arr.sort(),
        tap(finishScript),
        tap(() => printMemory('array.prototype.sort'))
    )(arr);

const performance = (fn, arr, name) =>
    pipe(
        tap(startScript),
        (arr) => fn(arr),
        tap(finishScript),
        tap(() => printMemory(name))
    )(arr);
    
const sort = (arr) =>
    pipe(
        tap((arr) => performance(heapSorting, arr, 'heapSort')),
        tap((arr) => performance(quickSort, arr, 'quickSort')),
        performanceNormalSort,
        // tap((arr) => heapSort(arr))
        // tap((arr) => performance(heapSort, arr, 'heapSort'))
    )(arr);
// const sort = (arr) => heapSorting(arr);

module.exports = {
    sort
};