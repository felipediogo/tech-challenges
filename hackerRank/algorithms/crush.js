let biggestNumber = 0;
const applySum = (value, items, start, end) => {
    for (var i=start; i<=end; i++) {
        items[i]+=value;
        if (items[i] > biggestNumber) {
            biggestNumber = items[i];
            console.log(biggestNumber);
        }
    }
};
const process = (input, size) => {
    const items = Array.apply(null, Array(size+1)).map(function() { return 0 });
    for (var i=0; i < size; i++) {
        console.log(input);
        let line = input[i];
        let [start, end, value] = line.split(' ');
        console.log(line);
        console.log(start);
        console.log(end);
        console.log(value);
        applySum(value, items, start, end);
    }

    return biggestNumber;
}

module.exports = process;