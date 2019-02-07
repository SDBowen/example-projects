function tribonacci(signature, n) {
  if (n < 4) {
    return signature.slice(0, n);
  } else {
    for (let i = 0; i < n - 3; i++) {
      signature.push(signature.slice(-3).reduce((a, b) => a + b));
    }
    return signature;
  }
}
