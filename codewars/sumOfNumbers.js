function GetSum(a, b) {
  let firstNum = a < b ? a : b;
  let secondNum = a < b ? b : a;

  let sum = 0;
  for (let i = firstNum; i <= secondNum; i++) {
    sum += i;
  }

  return sum;
}
