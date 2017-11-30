const { sort } = require('./sorts/heapSort');
const tallestCandles = (n, arr) => {

    if (n === 0) return 0;
    if (n === 1) return 1;

    let length = arr.length;
    sort(arr);
    const highestCandle = arr[--length];
    let quantity = 1;
    while (length--) {
        if (highestCandle === arr[length]) {
            quantity++;
        } else break;
    }

    return quantity;
};

module.exports = tallestCandles;