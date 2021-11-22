const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"
    }
    
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    if (num1 > num2) {
        let tmp = num1
        num1 = num2
        num2 = tmp        
    }

    let i = num1;
    let sum = 0;
    while (i <= num2) {
        sum += i
        i++
    } 
    return sum 
};

// Do not edit below this line
module.exports = sumAll;
