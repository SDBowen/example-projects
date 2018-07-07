var TwoFer = function() {};

TwoFer.prototype.twoFer = function(who) {
  // If no name was passed in, set who to 'you'
  if (!who) {
    who = 'you';
  }

  return `One for ${who}, one for me.`;
};

module.exports = TwoFer;
