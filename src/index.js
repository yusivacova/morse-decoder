const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const encodedLetter = [];

    for (let i = 0; i < expr.length - 9; i+=10 ){
        let counter = i + 10;
        encodedLetter.push(expr.slice(i, counter))
    }
    
    let  encodedLetterNoZero = [];
    encodedLetter.forEach(function (item){
        for (let i = 0; i < item.length; i++){
            if (item[i] === '1') {
                encodedLetterNoZero.push(item.slice(i));
                break;
            }
            if (item[i] === '*') {
                encodedLetterNoZero.push(item);
                break;
            }
        }
    })

    const morseCodeExpr = encodedLetterNoZero.map(function(item){
    let itemEncoded = '';

    if (item[0] === '1'){
        for ( let i = 0; i < item.length; i+= 2) {
        if (item[i] === '1' && item[i + 1] === '0') {
             itemEncoded += '.';
        } else if (item[i] === '1' && item[i + 1] === '1') {
            itemEncoded += '-';
        } 
    }
    if (item[0] ==='*') {
            itemEncoded += ' ';
        }
    }
     item = itemEncoded;
   
         return item;
    });

    const resultSentence = morseCodeExpr.map(function(item){
        
        for (let key in MORSE_TABLE) {
            let value = MORSE_TABLE[key];
            if (item=== key) {
                item = value;
               }
            }
        
        if (item === '') item = ' ';

        return item;
    });


return  resultSentence.join('');
}

module.exports = {
    decode
}
