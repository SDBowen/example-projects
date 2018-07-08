// Given a DNA strand, transcribe to RNA:
// `G` -> `C`
// `C` -> `G`
// `T` -> `A`
// `A` -> `U`
const DnaTranscriber = function dnaTranscriber() {};

DnaTranscriber.prototype.toRna = function(dna) {
  dnaArray = dna.split('');

  let rnaArray = dnaArray.map(this.dnaConversion);

  return rnaArray.join('');
};

DnaTranscriber.prototype.dnaConversion = function(dna) {
  switch (dna) {
    case 'G':
      return 'C';
      break;
    case 'C':
      return 'G';
      break;
    case 'T':
      return 'A';
      break;
    case 'A':
      return 'U';
      break;
    default:
      throw new Error('Invalid input');
  }
};

module.exports = DnaTranscriber;
