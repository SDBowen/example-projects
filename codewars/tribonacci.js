function tribonacci(signature, n) {
  if (n < 4) {
    return signature.slice(0, n);
  } else {
    for (let i = 0; i < n - 3; i++) {
      let lastThreeNums = signature.slice(-3);

      let sum = lastThreeNums.reduce((a, b) => a + b);
      signature.push(sum);
    }

    return signature;
  }
}
