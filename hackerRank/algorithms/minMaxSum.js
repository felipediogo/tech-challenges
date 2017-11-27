const quickSort = require('./sorts/quickSort');
const arraySum = require('./arraySum');
const minMaxSum = (arr, sampleSize = 4) => {
    let length = arr.length - 1;
    const sortedArray = quickSort({ arr, left: 0, right: length });
    const lowestArray = [];
    const highestArray = [];

    for (var i = 0; i < sampleSize; i++) {
        lowestArray.push(sortedArray[i]);
        highestArray.push(sortedArray[length--]);
    }

    return `${arraySum(lowestArray)} ${arraySum(highestArray)}`;
};

module.exports = minMaxSum;