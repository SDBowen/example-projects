function SeriesSum(n) {
  let base = 1;
  let sum = 0.0;

  for (let i = 0; i < n; i += 1) {
    sum += 1 / base;
    base += 3;
  }

  return sum.toFixed(2).toString();
}
