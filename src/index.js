const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const encodedLetter = [];

  for (let i = 0; i < expr.length - 9; i += 10) {
    const counter = i + 10;
    encodedLetter.push(expr.slice(i, counter));
  }

  const encodedLetterNoZero = [];

  encodedLetter.forEach((item) => {
    for (let i = 0; i < item.length; i += 1) {
      if (item[i] === '1') {
        encodedLetterNoZero.push(item.slice(i));
        break;
      }
      if (item[i] === '*') {
        encodedLetterNoZero.push(item);
        break;
      }
    }
  });

  const morseCodeExpr = encodedLetterNoZero.map((item) => {
    let itemEncoded = '';

    if (item[0] === '1') {
      for (let i = 0; i < item.length; i += 2) {
        if (item[i] === '1' && item[i + 1] === '0') {
          itemEncoded += '.';
        } else if (item[i] === '1' && item[i + 1] === '1') {
          itemEncoded += '-';
        }
      }
      if (item[0] === '*') {
        itemEncoded += ' ';
      }
    }

    return itemEncoded;
  });

  const resultSentence = morseCodeExpr.map((item) => {
    let newItem = item;

    Object.keys(MORSE_TABLE).forEach((key) => {
      const value = MORSE_TABLE[key];
      if (newItem === key) {
        newItem = value;
      }
    });

    if (newItem === '') newItem = ' ';

    return newItem;
  });

  return resultSentence.join('');
};
