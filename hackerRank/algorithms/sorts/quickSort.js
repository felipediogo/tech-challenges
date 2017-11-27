function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

module.exports = function quickSort({ arr, left, right }) {
  var len = arr.length,
    pivot,
    partitionIndex;
  // if (!left) left = 0;
  // if (!right) right = len - 1;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    //sort left and right
    quickSort({ arr, left, right: partitionIndex - 1 });
    quickSort({ arr, left: partitionIndex + 1, right });
  }
  return arr;
}