const calculateDiagonals = (matrix, n) => {
  const sums = { left: 0, right: 0 };
  let final = (n - 1);
  let initial = 0;
  for (var i = 0; i < n; i++) {
    sums.left += matrix[i][initial++];
    sums.right += matrix[i][final--];
  }
  return sums.left > sums.right ? sums.left - sums.right : sums.right - sums.left;
};

module.exports = calculateDiagonals;