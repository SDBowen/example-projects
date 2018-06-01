function countDown(seconds) {
  let remainingTime = seconds;  
  const intervalId = setInterval(() => {

    if (remainingTime > 1) {
      remainingTime -= 1;
      console.log(`Remaining: ${remainingTime}`)
    } else {
      console.log('Ring Ring Ring');
      clearInterval(intervalId)
    }
  }, 1000)
};

countDown(3);