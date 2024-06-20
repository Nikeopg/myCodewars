decodeMorse = function (morseCode) {

    let res = [];

    let words = morseCode
        .trim()
        .split('   ');

    res = words.map(word => {
        return word.split(' ')
            .map(char => MORSE_CODE[char])
    }).map(wordArr => wordArr.join('')).join(' ')

    return res


    // You can use MORSE_CODE[morse]
};