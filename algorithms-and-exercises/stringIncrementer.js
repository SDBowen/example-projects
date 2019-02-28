function incrementString(strng) {
  let number = [];

  let letters = strng.split("").filter(e => {
    if (isFinite(e)) {
      number.push(e);
    } else {
      return e;
    }
  });

  newNumber = returnIncrementedNumber(number);

  while (newNumber.length < number.length) {
    newNumber = "0" + newNumber;
  }

  return `${letters.join("")}${newNumber}`;
}

function returnIncrementedNumber(num) {
  parsedNumber = parseInt(num.join(""), 10);

  if (parsedNumber) {
    parsedNumber += 1;
  } else {
    parsedNumber = 1;
  }

  return parsedNumber.toString();
}

console.log(incrementString("taco00999"));
