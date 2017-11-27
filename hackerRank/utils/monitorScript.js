const { pipe, tap } = require('ramda');

const printMemory = (script) =>
    console.log(`The script [${script}] uses approximately 
    ${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB`);

let start;
const startScript = () => start = new Date();
const finishScript = () => console.log("Call to doSomething took " + (new Date() - start) + " milliseconds.");

const monitorScript = (script) => (arr) => 
    pipe(
        tap(()=>console.log('oi'))
        // tap(startScript),
        // () => script(arr),
        // tap(finishScript),
        // printMemory
    )(arr);

module.exports = monitorScript;