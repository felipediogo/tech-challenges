const monitorScript = require('../../utils/monitorScript');
const { buildArray, createArray } = require('./createArray');
const { sort } = require('./');
describe('checks array building memory usage', () => {

    test('that an array of 500000 length will be created', () => {
        const arr = createArray(125000);
        sort(arr);
    });
});