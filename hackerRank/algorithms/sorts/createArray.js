const getRandomIntNegativeIncluded = require('./randomNumber');

const buildArray = (size, content) => {
    const arr = [];
    for (var i = 0; i < size; i++) {
        arr.push(getRandomIntNegativeIncluded(1, 10 ^ 6));
    }
    return arr;
};

const createArray = (size) => {
    return buildArray(size, getRandomIntNegativeIncluded)
};

module.exports = {
    createArray,
    buildArray
};