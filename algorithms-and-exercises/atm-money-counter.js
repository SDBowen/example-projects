function atm(value) {
  let currencyType = value
    .replace(/[0-9]/g, "")
    .toUpperCase()
    .replace(/ /g, "");
  let amount = parseInt(value.replace(/[a-zA-Z]/g, "").trim());

  // Check if currency exists
  if (currencyType in VALUES) {
    return calculateNoteDisbursement(currencyType);
  } else {
    return `Sorry, have no ${currencyType}.`;
  }

  function calculateNoteDisbursement(currencyType) {
    let disbursementAmounts = [];
    let message = [];
    let remainingAmount = amount;

    for (let i = VALUES[currencyType].length - 1; i >= 0; i -= 1) {
      let numberOfNotes = Math.floor(remainingAmount / VALUES[currencyType][i]);

      if (numberOfNotes >= 1) {
        disbursementAmounts.push(numberOfNotes);
        message.push(
          `${numberOfNotes} * ${VALUES[currencyType][i]} ${currencyType}, `
        );
      } else {
        disbursementAmounts.push(0);
      }

      remainingAmount -=
        VALUES[currencyType][i] *
        disbursementAmounts[disbursementAmounts.length - 1];
    }

    if (remainingAmount > 0) {
      return `Can't do ${amount} ${currencyType}. Value must be divisible by ${
        VALUES[currencyType][0]
      }!`;
    } else {
      return message.join("").slice(0, -2);
    }
  }
}
