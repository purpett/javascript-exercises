const reverseString = function(str) {
    let i = str.length - 1;
    let value = "";
    while (i >= 0) {
        value += str[i]
        i--;
    }
    return value;
};

// Do not edit below this line
module.exports = reverseString;
