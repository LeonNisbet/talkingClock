const numberToText = (number) => {
  if(!number){
    return 'zero'
  } else if (number > 99 || number < 0) {
    throw new Error('Cannot convert negatives or numbers greater than 99')
  }

  const smalls = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const bigs = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let text

  if (number <= smalls.length) {
    text = smalls[number - 1];
  } else {
    let ones = number % 10;
    let tens = Math.floor(number / 10);
    if (tens <= 9) {
      text = bigs[tens - 2];
      if (ones > 0) {
        text += ' ' + smalls[ones - 1];
      }
    }
  }

  return text;
};

module.exports = numberToText;
