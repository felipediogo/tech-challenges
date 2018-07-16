/*
input   3
        ab
        bb
        abc
*/
/*
output
        ba
        no answer
        acb
*/

const swap = (firstIndex, secondIndex, arr) => {
    const firstItem = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = firstItem;
    return arr;
}

const nextBiggerLexicographical = (input) => {
    let length = input.length;
    let letter;
    while (length--) {
        if (length > 0 && input[length] > input[length - 1]) {
            return swap(length - 1, length, input).join('');
        }
    }
    return 'no answer';
};

const processInput = (input) => {
    const args = input.split('\n');


    const quantity = args.shift();
    for (var i = 0; i < quantity; i++) {
        console.log(nextBiggerLexicographical(args[i].split('')));
    }
};

module.exports = processInput;