function validatePIN(pin) {
  let pinLength = pin.length;

  return (pinLength == 4 || pinLength == 6) && parseInt(pin, 10) == pin;
}
