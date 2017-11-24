const plusMinus = (arr, n) => {
  if (n === 0) return 0;
  const response = { positive: 0, negative: 0, zeros: 0 };
  for (var i = 0; i < n; i++) {
    response[arr[i] > 0 ? 'positive' : (arr[i] === 0 ? 'zeros' : 'negative')]++;
  }
  return `${(response.positive/n).toFixed(6)}\n${(response.negative/n).toFixed(6)}\n${(response.zeros/n).toFixed(6)}`
};

module.exports = plusMinus;