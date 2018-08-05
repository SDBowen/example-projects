// log numbers 1 through num
// log fizz if divisable by 3
// log buzz if divisable by 5
// log fizzBuzz if divisible by 3 and 5

function fizzBuzz(num) {
  for (let i = 1; i <= num; i += 1) {
    if (i % 15 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);
