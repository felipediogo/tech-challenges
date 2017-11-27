const quickSort = require('../../utils/quickSort');
function solution(A) {
    const length = A.length;
    if (length === 0) {
        return 1;
    }
    const sortedArray = quickSort({ arr: A, left: 0, right: length - 1 });
    let smallestInteger = 1;
    for (var i = 0; i < length; i++) {
        let integer = sortedArray[i];
        if (integer < 0) continue;
        if (integer > smallestInteger) {
            return smallestInteger;
        } else if (integer <= smallestInteger) {
            smallestInteger = integer + 1;
        }
    }
    return smallestInteger;
}

console.log(solution([1, 2, 410000, 1000032]));
