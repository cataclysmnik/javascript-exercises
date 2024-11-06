const palindromes = function (str) {
    let sentence = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/^[0-9a-z]+$/i)) {
            sentence += str[i].toLowerCase();
        }
    }

    let reverse = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
        reverse += sentence[i];
    }

    return reverse === sentence;
};


// Do not edit below this line
module.exports = palindromes;
